import z from "zod";

export const userRegistrationSchema = z.object({
  username: z
    .string("არ შეიძლება, რომ გამოიყენო ციფრები")
    .trim()
    .min(3, "Username is to short")
    .max(20, "Username is to long")
    .toLowerCase()
    .regex(/^[A-Za-z]+$/, "Only English letters allowed"),
  lastname: z
    .string()
    .trim()
    .min(4, "Too short")
    .max(20, "Too long")
    .toLowerCase()
    .regex(/^[A-Za-z]+$/, "Only English letters allowed"),
  email: z
    .string()
    .regex(
      /^(?!\.)(?!.*\.\.)([a-z0-9_'+\-\.]*)[a-z0-9_'+\-]@([a-z0-9][a-z0-9\-]*\.)+[a-z]{2,}$/i,
      "Invalid email format"
    ),
  password_hash: z
    .string()
    .trim()
    .min(8)
    .max(64)
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      "Invalid password format"
    ),
});




