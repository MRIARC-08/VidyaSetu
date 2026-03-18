import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider === 'google') {
        return `${process.env.NEXTAUTH_URL}/api/auth/oauth/google?email=${user.email}&name=${user.name}&image=${user.image}&providerAccountId=${account.providerAccountId}`;
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
