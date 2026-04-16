import authFetch from '@/lib/auth/authFetch';

import UserController from '@/modules/user/user.controller';
import UserServices from '@/modules/user/user.service';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function Layout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { class?: string };
}>) {
  let res;
  try {
    res = await UserServices.getUser();
    console.log(res?.class);
  } catch (error: any) {
    if (error.message === 'jwt expired') {
      const cookieStore = await cookies();
      console.log('==layout cookieStore.toString():', cookieStore.toString());
      console.log(
        '==layout has refresh_token?',
        !!cookieStore.get('refresh_token')
      );
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
      console.log('==layout refresh route status:', refresh.status);
      console.log(await refresh.json());
    }
  }

  if (res?.class && !params.class) {
    console.log('runninggggg');
    return redirect(`/ncert/${res.class}`);
  }

  return <div>{children}</div>;
}

export default Layout;
