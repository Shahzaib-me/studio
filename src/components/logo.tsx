import Link from 'next/link';
import { MonitorDot } from 'lucide-react';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" prefetch={false}>
      <MonitorDot className="h-8 w-8 text-primary" />
      <span className="text-xl font-bold tracking-tight text-foreground font-headline">
        Nigran
      </span>
    </Link>
  );
}
