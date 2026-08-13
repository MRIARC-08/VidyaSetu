import { SetCookies } from './cookies';

export async function getSession() {
  const session = await SetCookies.verifyCookies();
  return session || null;
}

export async function getCurrentUser() {
  const session = await getSession();
  if (!session) return null;

  return {
    id: session.sub,
    role: session.role,
    isProfileCompleted: session.isProfileCompleted,
  };
}
