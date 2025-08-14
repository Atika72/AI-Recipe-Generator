import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { saveNewUser } from "./authAction";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID as string,
      clientSecret: process.env.GOOGLE_SECRET as string,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  callbacks: {
    // This callback is called when a user signs in or signs up
    async signIn({ user, account, profile }) {
      try {
        // Call the saveNewUser function to handle user creation
        const userCreated = await saveNewUser({
          name: user.name || "",
          email: user.email || "",
          password: "",
        });
        if (userCreated) {
          console.log("User signed in successfully:", user.email);
          return true;
        }
        console.log("User already exists or was not created:", user.email);
        return false;
      } catch (error) {
        console.error("Error during sign-in:", error);
        return false;
      }
    },
  },
};
