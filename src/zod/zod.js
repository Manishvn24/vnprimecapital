import { z } from "zod";

export const phoneSchema = z.object({
  phone: z
    .string()
    .min(10, "Mobile number must be 10 digits")
    .max(10, "Mobile number must be 10 digits")
    .regex(/^[6-9]\d{9}$/, "Enter a valid Indian mobile number"),
});
