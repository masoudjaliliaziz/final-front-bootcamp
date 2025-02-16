import { RegisterFormSchema, RegisterFormState } from "@/lib/validation";
import { error } from "console";

export async function register(state: RegisterFormState, formData: FormData) {
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
  try {
    const res = await fetch("http://localhost:8000/auth/admin/register", {
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
      return data;
    }
  } catch (err) {
    console.error(err.message);
    return {
      message: "register failed",
    };
  }
}
