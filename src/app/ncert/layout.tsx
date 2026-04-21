import authFetch from '@/lib/auth/authFetch';
import { jwtService } from '@/lib/auth/jwt';

import UserController from '@/modules/user/user.controller';
import UserRepository from '@/modules/user/user.repository';
import UserServices from '@/modules/user/user.service';
import { Decimal } from '@prisma/client/runtime/client';
import { constants } from 'buffer';
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
  console.log(pathname, "pathname=============@#!$@%#^&%*^&(*^&%^$#%@#$#")
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

      const {accessToken} = await refresh.json()
      // console.log(accessToken, "token=========")

      // const decoded =  jwtService.verifyAccessToken(accessToken)
      // console.log(decoded)

      if(refresh.ok){
        res = await UserRepository.getUser(accessToken);
      }
      // console.log('==layout refresh route status:', refresh.status);
      // console.log(await refresh.json());
    }
  }
  
  console.log(  "calssssssss==========----------")

  if (res?.class && !(pathname?.startsWith(`/ncert/${res.class}`)) ) {
    console.log('runninggggg', res.class);
    return redirect(`/ncert/${res.class}`);
  }

  return <div>{children}</div>;
}

export default Layout;
