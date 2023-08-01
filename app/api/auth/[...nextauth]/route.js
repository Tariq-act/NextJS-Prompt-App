import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import { connectDB } from '@utils/database';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],

  async session({ session }) {},
  async signIn({ profile }) {
    try {
      await connectDB();

      // If user already exists

      // If not, create new user

      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  },
});
