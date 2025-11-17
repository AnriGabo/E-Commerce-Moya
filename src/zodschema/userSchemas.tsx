
import z from "zod";

const RegistrationSchema = z
  .object({
    username: z
      .string()
      .trim()
      .min(4, { message: "Username is to short" })
      .max(16, { message: "Username is to long" })
      .toLowerCase(),
    lastname: z
      .string()
      .trim()
      .min(6, { message: "Username is to short" })
      .max(25, { message: "Username is to long" })
      .toLowerCase(),
    email: z
      .string()
      .regex(
        /^(?!\.)(?!.*\.\.)([a-z0-9'+.-]*)[a-z0-9'+-]@([a-z0-9][a-z0-9-]*\.)+[a-z]{2,}$/i,
        { message: "Invalid email format" }
      ),
    password_hash: z
      .string()
      .min(8, { message: "password must be a 8 charachter long" })
      .max(64, { message: "password must be a 64 charachter long" })
      .trim()
      .regex(/[A-Z]/, {
        message: "Password must be a contain one uppercase Charachter",
      })
      .regex(/[a-z]/, {
        message: "Password must be a contain one lowercase Charachter",
      })
      .regex(/[0-9]/, { message: "Password must be a contain one number" })
      .regex(/[^A-Za-z0-9]/, {
        message: "Password must includes at least one special charachter",
      }),
    repeatpass: z.string().trim(),
  })
  .refine((d) => d.password_hash === d.repeatpass, {
    message: "Password dont match",
    path: ["repeatpass"],
  });

export default RegistrationSchema;
