"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Baby, Car, LayoutDashboard, PawPrint, Bell, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/logo';
import { Badge } from './ui/badge';
import { Separator } from './ui/separator';

const sidebarNavItems = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
        title: 'Nigran-Tifl',
        href: '/dashboard/tifl',
        icon: <Baby className="h-5 w-5" />,
    },
    {
        title: 'Nigran-Anaam',
        href: '/dashboard/anaam',
        icon: <PawPrint className="h-5 w-5" />,
    },
    {
        title: 'Nigran-Motor',
        href: '/dashboard/motor',
        icon: <Car className="h-5 w-5" />,
    },
];

const secondaryNavItems = [
    {
        title: 'Notifications',
        href: '/dashboard/notifications',
        icon: <Bell className="h-5 w-5" />,
        badge: '5'
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
        icon: <Settings className="h-5 w-5" />,
    },
]

export function DashboardSidebar() {
    const pathname = usePathname();

    return (
        <div className="hidden border-r bg-card md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-16 items-center border-b px-6">
                    <Logo />
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start px-4 text-sm font-medium">
                        {sidebarNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                    pathname === item.href && "bg-muted text-primary"
                                )}
                            >
                                {item.icon}
                                {item.title}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-4">
                  <Separator className="my-2"/>
                   <nav className="grid items-start px-0 text-sm font-medium">
                        {secondaryNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                    pathname === item.href && "bg-muted text-primary"
                                )}
                            >
                                {item.icon}
                                {item.title}
                                {item.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">{item.badge}</Badge>}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
