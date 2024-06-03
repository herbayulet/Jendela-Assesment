import { z } from "zod";

export const schemaLogin = z.object({
  email: z.string().email("Invalid email"),
  password: z
    .string({ message: "Wajib Di isi" })
    .min(6, "Password must be at least 6 characters"),
});

export type LoginSchema = z.infer<typeof schemaLogin>;
