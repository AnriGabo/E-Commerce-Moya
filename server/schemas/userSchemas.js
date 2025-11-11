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
    .min(8, "Password must be at least 8 characters long")
    .max(64, "Password's charachter long max size is 64 ")
    .regex(/[A-Z]/, "Password must includes at least one uppercase letter")
    .regex(/[a-z]/, "Password must includes at least one lowercase letter")
    .regex(/[0-9]/, "Password must includes at least one number letter")
    .regex(
      /[^A-Za-z0-9]/,
      "Password must includes at least one special charachter"
    ),
});

export const userSignInSchema = z
  .object({
    email: z.string().trim().toLowerCase().email(),
    password_hash: z.string().min(8).max(64),
  })
  .strict();
