"use server";
import "server-only";
import { RegisterFormSchema, RegisterFormState } from "@/lib/validation";
import { createSession } from "@/lib/session";
import { redirect } from "next/navigation";
const BASE_URL = "http://localhost:8000";

export async function register(state: RegisterFormState, formData: FormData) {
  console.log(BASE_URL);
  //validate input
  const validationFields = RegisterFormSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  // If any form fields are invalid, return early
  if (!validationFields.success) {
    return {
      errors: validationFields.error.flatten().fieldErrors,
    };
  }

  const res = await fetch(`${BASE_URL}/auth/admin/register`, {
    method: "post",
    body: JSON.stringify(validationFields.data),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await res.json();
  if (!res.ok) {
    return { message: data.message, errors: data.errors };
  } else {
    await createSession({
      accessToken: data.tokens.accessToken,
      refreshToken: data.tokens.refreshToken,
    });
    redirect("/dashboard");
  }
}
