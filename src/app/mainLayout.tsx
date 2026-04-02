'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { PropsWithChildren, useEffect, useState } from 'react';
import { boolean, string } from 'zod';

interface ProfileProps {
  name: string;
  image: string;
  id: string;

  userId: string;
  age: string;
  class: string;
  createdAt: string;
  profileCompleted: boolean;
}

export default function MainLayout({ children }: PropsWithChildren) {
  const [user, setUser] = useState<ProfileProps | null>(null);

  const getUser = async () => {
    const res = await fetch('/api/profile/getProfile', {
      method: 'GET',
      credentials: 'include',
    });

    const user = await res.json();
    console.log('hemlo', user);
    setUser(user.profile);

    console.log(user);
    if (user.message == 'jwt expired') {
      const r = await fetch('/api/auth/refresh', {
        method: 'GET',
        credentials: 'include',
      });

      const p = await r.json();

      console.log(p);

      getUser();
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const path = usePathname();

  const [isSide, setIsSide] = useState(true);

  const elements = [
    { name: 'Dashboard', link: '/dashboard' },
    { name: 'NCERT Explorer', link: '/ncert' },
    { name: 'Notes Upload', link: '/notes' },
    { name: 'My Quizes', link: '/quiz' },
    { name: 'Performance', link: '/performance' },
  ];

  return (
    <div className="flex">
      <div
        className="w-8 h-8 flex flex-col justify-evenly  rounded-full fixed top-2 left-0-2 z-10"
        onClick={() => setIsSide((prev) => !prev)}
      >
        <hr className="bg-black/40 text-black h-1" />
        <hr className="bg-black/40 text-black h-1" />
        <hr className="bg-black/40 text-black h-1" />
      </div>

      <div
        className={` relative min-h-screen  ${isSide ? 'md:w-60 w-44' : 'w-0'} transition-all duration-500  border-r border-primary-foreground`}
      >
        <div
          className={`fixed ${isSide ? 'left-2' : '-left-200'} transition-all duration-500 md:w-44 w-40`}
        >
          <div className="pl-8 pt-2 ">{user ? user?.name : 'unknown'}</div>

          <div className="pt-8 flex flex-col gap-2">
            {elements.map((el) => {
              return (
                <Link
                  href={el.link}
                  className={` font-medium text-[16px] w-full hover:bg-button/20 hover:text-button p-2 pl-4 pr-4 rounded-md transition-all duration-300 ${path.startsWith(el.link) ? 'bg-button/20 text-button' : 'text-muted-foreground bg-white'}`}
                >
                  {el.name}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex-1 ">{children}</div>
    </div>
  );
}
