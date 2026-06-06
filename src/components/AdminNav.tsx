'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const adminLinks = [
  {
    label: 'Dashboard',
    href: '/admin',
  },
  {
    label: 'Seed NCERT',
    href: '/admin/ncert',
  },
  {
    label: 'Analytics',
    href: '/admin/analytics',
  },
];

export function AdminNav() {
  const pathname = usePathname();

  return (
    <aside className="flex w-56 flex-col border-r bg-muted/30 p-4">
      <div className="mb-6 px-2">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Admin Panel
        </h2>
      </div>

      <nav className="flex flex-col gap-1">
        {adminLinks.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'rounded-lg px-3 py-2 text-sm font-medium transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              {link.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
