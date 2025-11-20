import z from "zod";
// keyboard აკრძალვას ისედაც გავაკეთებ რაც იქითაა

const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid Email Format" }),
  password_hash: z
    .string()
    .min(8, { message: "password is to short" })
    .max(32, { message: "password is to long" })
    .trim()
    .regex(/[A-Z]/, {
      message: "password must be contain at least one uppercase ",
    })
    .regex(/[0-9]/, { message: "number must be contain at least one number" })
    .regex(/[a-z]/, {
      message: "password must be containt at least one number",
    })
    .regex(/[^A-Za-z0-9]/, {
      message: "Password must includes at least one special charachter ($ % ) ",
    }),
});

export default LoginSchema;
