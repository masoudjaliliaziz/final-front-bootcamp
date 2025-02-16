import { z } from "zod";

export const RegisterFormSchema = z.object({
  firstName: z.string().min(2, { message: "حداقل 2 کاراکتر وارد کنید" }).trim(),
  lastName: z.string().min(2, { message: "حداقل 2 کاراکتر وارد کنید" }).trim(),
  email: z.string().email({ message: "لطفا یک ایمیل معتبر وارد کنید" }).trim(),
  password: z
    .string()
    .min(8, { message: "حداقل 8 کاراکتر" })
    .regex(/[a-zA-Z]/, { message: "حداقل یک حرف داشته باشد" })
    .regex(/[0-9]/, { message: "جداقل یک عدد داشته باشد" })
    .regex(/[^a-zA-Z0-9]/, {
      message: "حداقل یک کاراکتر خاص داشته باشد",
    })
    .trim(),
});

export type RegisterFormState =
  | {
      errors?: {
        firstName?: string[];
        lastName?: string[];
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
