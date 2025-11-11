import { ZodError } from "zod";

// ცენტრალიზებული იქნება ჩვენი სისტემა, რაც იმას ნიშნავს რეალურად, რომ ჩვენ Api error handling-ი იქნება ეს თუ
// Validation error handling-ი, მას ჩვენ ვუმკლავდებით problem detail json ის ფორმატში

function problemDetailsFromZod(err, status = 400) {
  const issues = err.issues || [];

  return {
    type: "https://httpsstatuses.com/400",
    title: "Validation Error",
    status,
    detail: "Request Validation Failed",
    "invalid-params": issues.map((e) => ({
      path: e.path,
      message: e.message,
      code: e.code,
      expected: e.expected,
    })),
  };
}

function Validate({body }) {
  return (req, res, next) => {
    try {
      if (body) {
        const r = body.safeParse(req.body);
        console.log(r);
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

export default Validate;
