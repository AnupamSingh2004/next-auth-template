import { getAuthSession } from "@/lib/session"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { LogOut, LayoutDashboard, User } from "lucide-react"

export default async function DashboardPage() {
    const session = await getAuthSession()

    if (!session) {
        redirect("/login")
    }

    return (
        <div className="flex min-h-screen w-full flex-col bg-muted/40 backdrop-blur-3xl">
            <header className="sticky top-0 sticky z-30 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6 shadow-sm">
                <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link
                        href="#"
                        className="flex items-center gap-2 text-lg font-semibold md:text-base"
                    >
                        <LayoutDashboard className="h-6 w-6" />
                        <span className="sr-only">Dashboard</span>
                    </Link>
                    <Link
                        href="#"
                        className="text-foreground transition-colors hover:text-foreground"
                    >
                        Overview
                    </Link>
                    <Link
                        href="#"
                        className="text-muted-foreground transition-colors hover:text-foreground"
                    >
                        Settings
                    </Link>
                </nav>
                <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
                    <div className="ml-auto flex-1 sm:flex-initial">
                        {/* Search or other header items can go here */}
                    </div>
                    <div className="flex items-center gap-4 text-sm font-medium">
                        <div className="flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full border shadow-sm">
                            <User className="h-4 w-4" />
                            <span>{session.user?.name || session.user?.email}</span>
                        </div>
                        <Link href="/api/auth/signout">
                            <Button variant="outline" size="icon" className="rounded-full shadow-sm">
                                <LogOut className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                                <span className="sr-only">Sign Out</span>
                            </Button>
                        </Link>
                    </div>
                </div>
            </header>
            <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
                <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pl-6 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">Total Revenue</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">$45,231.89</div>
                            <p className="text-xs text-muted-foreground">+20.1% from last month</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pl-6 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">Subscriptions</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">+2350</div>
                            <p className="text-xs text-muted-foreground">+180.1% from last month</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pl-6 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">Sales</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><rect width="20" height="14" x="2" y="5" rx="2"></rect><path d="M2 10h20"></path></svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">+12,234</div>
                            <p className="text-xs text-muted-foreground">+19% from last month</p>
                        </div>
                    </div>
                    <div className="rounded-xl border bg-card text-card-foreground shadow-sm">
                        <div className="p-6 flex flex-row items-center justify-between space-y-0 pl-6 pb-2">
                            <h3 className="tracking-tight text-sm font-medium">Active Now</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-4 w-4 text-muted-foreground"><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg>
                        </div>
                        <div className="p-6 pt-0">
                            <div className="text-2xl font-bold">+573</div>
                            <p className="text-xs text-muted-foreground">+201 since last hour</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
