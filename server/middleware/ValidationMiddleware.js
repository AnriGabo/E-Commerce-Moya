import { ZodError } from "zod";

// ცენტრალიზებული იქნება ჩვენი სისტემა, რაც იმას ნიშნავს რეალურად, რომ ჩვენ Api error handling-ი იქნება ეს თუ
// Validation error handling-ი, მას ჩვენ ვუმკლავდებით problem detail json ის ფორმატში

// განვიხილოთ რატომ არის კარგი და რატომ არის ეს მიდგომა ცუდი
// კარგი არის იმიტომ რომ ნებისმიერი validation error handling უმკალვდება ცენტრალიზებული სისტემა რომელიც ერთი და იგივე პაროლს აბრუნებს
// ცუდია იმიტო რო

// ამოვიღოთ ინფათის ქვევით e.message რომელიც ამბობს რა ერორია

function problemDetailsFromZod(err, status = 400) {
  const issues = err.issues || [];

  return {
    type: "https://httpsstatuses.com/400",
    title: "Validation Error",
    status,
    detail: "Request Validation Failed",
    "invalid-params": issues.map((e) => ({
      path: e.path.join("."),
      message: e.message,
      code: e.code,
    })),
  };
}

export function ValidateRegister({ body }) {
  return (req, res, next) => {
    try {
      if (body) {
        const r = body.safeParse(req.body);
        // console.log("this is r", r)
        if (!r.success)
          return res.status(400).json(problemDetailsFromZod(r.error));
        req.body = r.data;
        // console.log("Validation Middlewarejs", req.body);
      }
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json(problemDetailsFromZod(err));
      }
      next(err);
    }
  };
}

export function ValidateSignIn({ body }) {
  return (req, res, next) => {
    try {
      if (body) {
        const r = body.safeParse(req.body);
        if (!r.success)
          return res.status(400).json(problemDetailsFromZod(r.error));
        req.body = r.data;
      }
      next();
    } catch (err) {
      if (err instanceof ZodError) {
        return res.status(400).json(problemDetailsFromZod(err));
      }
      next(err);
    }
  };
}
