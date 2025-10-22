"use server";

import { signIn, signOut } from "@/auth";

export async function loginWithGithub() {
  console.log("loginWithGithub");
  await signIn("github", {
    redirectTo: "/dashboard",
  });
}

export async function logoutWithGithub() {
  console.log("logoutWithGithub");
  await signOut({
    redirectTo: "/auth/login",
  });
}
