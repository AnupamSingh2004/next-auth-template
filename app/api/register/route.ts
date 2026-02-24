import bcrypt from "bcryptjs"
import prisma from "@/lib/prisma"
import { NextResponse } from "next/server"

export async function POST(
    request: Request
) {
    try {
        const body = await request.json()
        const { email, password, name } = body

        if (!email || !password) {
            return new NextResponse("Missing Info", { status: 400 })
        }

        const hashedPassword = await bcrypt.hash(password, 12)

        const user = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        })

        return NextResponse.json(user)
    } catch (error: unknown) {
        if (typeof error === "object" && error !== null && "code" in error && (error as { code: string }).code === 'P2002') {
            return new NextResponse("Email already exists", { status: 400 })
        }
        return new NextResponse("Internal Error", { status: 500 })
    }
}
