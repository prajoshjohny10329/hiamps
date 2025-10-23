import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const ADMIN_EMAILS = [
  "prajoshjohny10329@gmail.com",
  "mssujith00@gmail.com",
  "msbatteryparts@ymail.com",
  "Sunriseindustriesbng@gmail.com",
];

// 1️⃣ Extend Session type to include role
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: "admin" | "user";
    };
  }
}

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async signIn({ user }) {
      // Only allow specific emails
      if (ADMIN_EMAILS.includes(user.email!)) {
        return true; // allowed → redirect to callbackUrl
      }
      return "/auth/unauthorized"; // redirect unauthorized users
    },

    async session({ session }) {
      // Add role info to session (optional)
      if (ADMIN_EMAILS.includes(session.user?.email!)) {
        console.log('session admin');
        
        session.user.role = "admin";
      } else {
        console.log('session user');

        session.user.role = "user";
      }
      return session;
    },
  },

  pages: {
    signIn: "/auth/login", // Custom login page
    error: "/auth/error", // optional error page
  },
});

export { handler as GET, handler as POST };
