import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import { AuthServices } from '@/modules/auth/auth.service';
import { SetCookies } from '@/lib/auth/cookies';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider !== 'google' || !user.email) {
        return false;
      }

      try {
        const result = await AuthServices.handleGoogleService({
          email: user.email,
          name: user.name ?? null,
          image: user.image ?? null,
          providerAccountId: account!.providerAccountId,
        });

        await SetCookies.setAuthCookies(
          result.accessToken,
          result.refreshToken,
        );

        return true;
      } catch {
        return false;
      }
    },
  },
});

export { handler as GET, handler as POST };
