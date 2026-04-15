import authFetch from '@/lib/auth/authFetch';
import authFetchServer from '@/lib/auth/authFetchServer';
import UserController from '@/modules/user/user.controller';
import UserServices from '@/modules/user/user.service';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  try {
    
  } catch (
    
  ) {
    
  }
  

  return <div>{children}</div>;
}

export default Layout;
