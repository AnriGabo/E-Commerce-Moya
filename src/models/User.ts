import * as z from "zod";
// zod ის აბსოლიტურად მთლიანაი რესურსი არის მოთავსებული z-ში
// beta version of zod

export const BasicUserSchema = z.object({
    username: z.string().trim().min(2, {message: `Name Must be 2 or more charachters long`}),
    lastname: z.string().trim().toLowerCase().min(6, {message: `Username Must be 6 or more charachter long`}),
    email: z.string().email().trim().toLowerCase(),

})

// .regex(/^[0-9]+$/, {message: `Only Numbers are allowed`}) - მსგავსს გავაკეთებთ რომ მხოლოდ დაშვებულია სტრინგი


