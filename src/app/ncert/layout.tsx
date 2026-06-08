import { authenticate } from '@/lib/middleware/auth.middleware';

import UserRepository from '@/modules/user/user.repository';
import UserServices from '@/modules/user/user.service';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let res;
  const headersList = await headers();
  const pathname = headersList.get('x-pathname');

  try {
    const auth = await authenticate();
    res = await UserServices.getUser(auth.userId);
  } catch (error) {
    if (error instanceof Error && error.message === 'jwt expired') {
      const cookieStore = await cookies();

      const refresh = await fetch(
        `${process.env.NEXTAUTH_URL}/api/auth/server-refresh`,
        {
          method: 'GET',
          headers: {
            Cookie: cookieStore.toString(),
          },
          cache: 'no-store',
        }
      );

      const { userId } = await refresh.json();

      if (refresh.ok) {
        res = await UserRepository.getUser(userId);
      }
    }
  }

  if (res?.class && !pathname?.startsWith(`/ncert/${res.class}`)) {
    return redirect(`/ncert/${res.class}`);
  }

  return <div>{children}</div>;
}

export default Layout;
