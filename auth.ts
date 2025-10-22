import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";

export const {
  handlers: { GET, POST },
  signIn,
  signOut,
  auth,
} = NextAuth({
  pages: {
    signIn: "auth/login",
  },
  providers: [GitHub],
  callbacks: {
    authorized: (params) => {
      console.log("in authorized");
      return !!params.auth?.user;
    },
  },
});
