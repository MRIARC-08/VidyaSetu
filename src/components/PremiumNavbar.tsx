'use client';

import { cn } from '@/lib/utils';
import { ArrowRight, Menu, Moon, Sparkles, Sun, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'NCERT', href: '/ncert' },
  { label: 'Dashboard', href: '/dashboard' },
  { label: 'Docs', href: '/docs' },
];

function isActive(pathname: string, href: string) {
  return href === '/' ? pathname === href : pathname.startsWith(href);
}

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle('dark', theme === 'dark');
  document.documentElement.style.colorScheme = theme;
  localStorage.setItem('vidyasetu-theme', theme);
}

export default function PremiumNavbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const onScroll = () => setHasScrolled(window.scrollY > 8);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const storedTheme = localStorage.getItem('vidyasetu-theme');
      const resolvedTheme: Theme =
        storedTheme === 'dark' || storedTheme === 'light'
          ? storedTheme
          : window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light';

      applyTheme(resolvedTheme);
      setTheme(resolvedTheme);
    });

    return () => window.cancelAnimationFrame(frameId);
  }, []);

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
      return nextTheme;
    });
  };

  const themeToggle = (
    <button
      type="button"
      className={cn('theme-toggle', theme === 'dark' && 'theme-toggle-dark')}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      aria-pressed={theme === 'dark'}
      onClick={toggleTheme}
    >
      <span className="theme-toggle-track" aria-hidden="true">
        <span className="theme-toggle-thumb">
          <Sun className="theme-toggle-icon theme-toggle-sun" />
          <Moon className="theme-toggle-icon theme-toggle-moon" />
        </span>
      </span>
    </button>
  );

  return (
    <header className="sticky top-0 z-50 flex w-full justify-center px-4 pt-4">
      <nav
        className={cn(
          'premium-navbar w-full max-w-6xl',
          hasScrolled && 'premium-navbar-scrolled'
        )}
        aria-label="Primary navigation"
      >
        <div className="flex min-h-16 items-center justify-between gap-4 px-4 sm:px-5">
          <Link href="/" className="navbar-brand" aria-label="Vidyasetu home">
            <span className="navbar-brand-mark">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
            </span>
            <span className="leading-none">
              <span className="block text-[15px] font-black uppercase tracking-[0.16em] text-foreground">
                Vidyasetu
              </span>
              <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-secondary/70 sm:block">
                Study OS
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'navbar-link',
                  isActive(pathname, item.href) && 'navbar-link-active'
                )}
                aria-current={
                  isActive(pathname, item.href) ? 'page' : undefined
                }
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              href="/login"
              className="text-sm font-bold text-secondary transition-colors hover:text-foreground"
            >
              Login
            </Link>
            {themeToggle}
            <Link href="/dashboard" className="navbar-cta">
              Start learning
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <button
            type="button"
            className="navbar-menu-button md:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>

        <div
          className={cn(
            'navbar-mobile-panel md:hidden',
            isOpen && 'navbar-mobile-panel-open'
          )}
        >
          <div className="flex flex-col gap-2 px-4 pb-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'navbar-mobile-link',
                  isActive(pathname, item.href) && 'navbar-mobile-link-active'
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 flex items-center gap-3 border-t border-white/60 pt-4">
              {themeToggle}
              <Link
                href="/login"
                className="flex h-10 items-center rounded-full px-3 text-sm font-bold text-secondary transition-colors hover:text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/dashboard"
                className="navbar-cta flex-1"
                onClick={() => setIsOpen(false)}
              >
                Start learning
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
