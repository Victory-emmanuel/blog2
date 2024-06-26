import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";
import User from "@/models/User";
import { connect } from "@/lib/db";
import { signJwtToken } from "@/lib/jwt";
import { pages } from "next/dist/build/templates/app-page";

const authOptions = {
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize(credentials) {
        await connect();

        const { email, password } = credentials;

        try {
          const user = await User.findOne({ email });
          if (!user) {
            throw new Error("invalid input");
          }
          const passwordMatch = await bcrypt.compare(password, userPassword);
          if (!passwordMatch) {
            throw new Error("password does not match");
          } else {
            const { password, ...currentUser } = user._doc;
            const accessToken = signJwtToken(currentUser);
            return { ...currentUser, accessToken };
          }
        } catch (error) {
          console.log(error);
        }
      },
    }),
  ],
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, user }) {
      // Persist the OAuth access_token and or the user id to the token right after signin
      if (user) {
        token.accessToken = user.accessToken;
        token._id = user._id;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user._id = token._id;
        session.user.accessToken = token.accessToken;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
