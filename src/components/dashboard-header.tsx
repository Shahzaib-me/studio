"use client"
import Link from 'next/link';
import { PanelLeft, Search, Baby, Car, LayoutDashboard, PawPrint, Bell, Settings } from 'lucide-react';

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { UserNav } from '@/components/user-nav';
import { usePathname } from 'next/navigation';
import { Logo } from './logo';
import { Badge } from './ui/badge';

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

export function DashboardHeader() {
    const pathname = usePathname();
    const pathParts = pathname.split('/').filter(p => p);
    
    return (
        <header className="flex h-16 items-center gap-4 border-b bg-card px-6 sticky top-0 z-30">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="shrink-0 md:hidden"
                >
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="flex flex-col">
                <nav className="grid gap-2 text-lg font-medium">
                  <div className="mb-4">
                    <Logo />
                  </div>
                  {sidebarNavItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                    >
                      {item.icon}
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <div className="mt-auto">
                    <nav className="grid gap-2 text-lg font-medium">
                        {secondaryNavItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                            >
                                {item.icon}
                                {item.title}
                                {item.badge && <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">{item.badge}</Badge>}
                            </Link>
                        ))}
                    </nav>
                </div>
              </SheetContent>
            </Sheet>

            <div className="hidden md:flex">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link href="/dashboard">Dashboard</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  {pathParts.length > 1 && <BreadcrumbSeparator />}
                  {pathParts.length > 1 && (
                    <BreadcrumbItem>
                      <BreadcrumbPage className="capitalize font-headline">{pathParts[1]}</BreadcrumbPage>
                    </BreadcrumbItem>
                  )}
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4">
              <form className="ml-auto flex-1 sm:flex-initial">
                <div className="relative">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Search assets..."
                    className="pl-8 sm:w-[300px] md:w-[200px] lg:w-[300px]"
                  />
                </div>
              </form>
              <UserNav />
            </div>
        </header>
    );
}
