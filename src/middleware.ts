import { withAuth } from "next-auth/middleware";

export default withAuth({
  callbacks: {
    authorized: ({ token }) => {
      // Only allow access if token email is in admin list
      const ADMIN_EMAILS = [
        "prajoshjohny10329@gmail.com",
        "admin2@gmail.com",
        "admin3@gmail.com",
      ];
      return !!token?.email && ADMIN_EMAILS.includes(token.email);
    },
  },
});

export const config = {
  matcher: ["/admin/:path*"], // Protect all /admin pages
};
