"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { COOKIE_NAME } from "@/lib/constants";
import { cookieOptions, sessionToken } from "@/lib/auth";

export async function loginAction(formData: FormData) {
  const password = String(formData.get("password") ?? "");
  const expected = process.env.CRM_APP_PASSWORD ?? "";
  if (!expected || password !== expected) {
    redirect("/login?e=1");
  }
  const jar = await cookies();
  jar.set(COOKIE_NAME, sessionToken(), cookieOptions());
  redirect("/hoy");
}

export async function logoutAction() {
  const jar = await cookies();
  jar.delete(COOKIE_NAME);
  redirect("/login");
}
