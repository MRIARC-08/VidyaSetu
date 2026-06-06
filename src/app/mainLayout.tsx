'use client';

import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useState } from 'react';

export default function MainLayout({ children }: PropsWithChildren) {
  const [isAdmin, setIsAdmin] = useState(false);
  const path = usePathname();

  useEffect(() => {
    let cancelled = false;

    async function checkRole() {
      try {
        const res = await fetch('/api/auth/me', {
          credentials: 'include',
        });
        if (!cancelled && res.ok) {
          const data = await res.json();
          setIsAdmin(data.role === 'ADMIN');
        }
      } catch {
        // Non-admin, no role check needed
      }
    }

    checkRole();
    return () => {
      cancelled = true;
    };
  }, []);

  const routes = ['/dashboard', '/ncert', '/performance', '/admin'];

  if (!routes.some((route) => path.startsWith(route))) {
    return <div className="flex-1">{children}</div>;
  }

  const elements = [
    {
      name: 'Dashboard',
      link: '/dashboard',
      svg: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 6V0H18V6H10V6M0 10V0H8V10H0V10M10 18V8H18V18H10V18M0 18V12H8V18H0V18"
            fill="currentColor"
          />
        </svg>
      ),
    },
    {
      name: 'NCERT Explorer',
      link: '/ncert',
      svg: (
        <svg
          width="32"
          height="32"
          viewBox="0 0 18 18"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M5.15385 12.8462L10.9615 10.9615L12.8462 5.15385L7.03846 7.03846L5.15385 12.8462ZM8.99548 10.1154C8.68439 10.1154 8.42148 10.0065 8.20674 9.78875C7.99199 9.57099 7.88462 9.30657 7.88462 8.99548C7.88462 8.68439 7.9935 8.42148 8.21126 8.20674C8.42902 7.99199 8.69344 7.88462 9.00453 7.88462C9.31562 7.88462 9.57853 7.9935 9.79328 8.21126C10.008 8.42902 10.1154 8.69344 10.1154 9.00453C10.1154 9.31562 10.0065 9.57853 9.78875 9.79328C9.57099 10.008 9.30657 10.1154 8.99548 10.1154ZM9.00335 18C7.75881 18 6.58873 17.7638 5.49311 17.2915C4.39749 16.8192 3.44445 16.1782 2.63399 15.3685C1.82353 14.5588 1.18192 13.6066 0.709152 12.512C0.236384 11.4175 0 10.2479 0 9.00335C0 7.75881 0.236162 6.58873 0.708487 5.49311C1.18081 4.39749 1.82182 3.44445 2.63152 2.63399C3.44122 1.82353 4.39337 1.18192 5.48796 0.709152C6.58256 0.236384 7.75212 0 8.99666 0C10.2412 0 11.4113 0.236162 12.5069 0.708487C13.6025 1.18081 14.5556 1.82182 15.366 2.63152C16.1765 3.44122 16.8181 4.39337 17.2909 5.48796C17.7636 6.58256 18 7.75212 18 8.99666C18 10.2412 17.7638 11.4113 17.2915 12.5069C16.8192 13.6025 16.1782 14.5556 15.3685 15.366C14.5588 16.1765 13.6066 16.8181 12.512 17.2909C11.4175 17.7636 10.2479 18 9.00335 18ZM9.00001 17C11.2295 17 13.1202 16.224 14.6721 14.6721C16.224 13.1202 17 11.2295 17 9.00001C17 6.77052 16.224 4.87981 14.6721 3.32789C13.1202 1.77597 11.2295 1.00001 9.00001 1.00001C6.77052 1.00001 4.87981 1.77597 3.32789 3.32789C1.77597 4.87981 1.00001 6.77052 1.00001 9.00001C1.00001 11.2295 1.77597 13.1202 3.32789 14.6721C4.87981 16.224 6.77052 17 9.00001 17Z" />
        </svg>
      ),
    },
    {
      name: 'Performance',
      link: '/dashboard/analytics',
      svg: (
        <svg
          width="32"
          height="26"
          viewBox="0 0 18 16"
          fill="inherit"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1.00001 15H5.67308V7.00001H1.00001V15ZM6.67309 15H11.3269V1.00001H6.67309V15ZM12.3269 15H17V9.00001H12.3269V15ZM0 16V6H5.67308V0H12.3269V8H18V16H0Z" />
        </svg>
      ),
    },
    ...(isAdmin
      ? [
          {
            name: 'Admin',
            link: '/admin',
            svg: (
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z"
                  fill="currentColor"
                />
              </svg>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="flex w-screen">
      <div className="w-15 flex min-h-screen flex-col gap-4 bg-accent/40 pt-8">
        <div className="fixed w-15 g-accent/40">
          {elements.map((val) => (
            <a
              key={val.name}
              href={val.link}
              className={`flex cursor-pointer items-center justify-center p-4 ${
                path.startsWith(val.link)
                  ? 'border-r-black-4 border-r bg-white'
                  : ''
              }`}
            >
              {val.svg}
            </a>
          ))}
        </div>
      </div>

      <div className="flex-1">{children}</div>
    </div>
  );
}
