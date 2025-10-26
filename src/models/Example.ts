// რა არის schema
import {z} from "zod";

// Creating a schema for strings;
const mySchema = z.string();

// რა არის ეს ?
mySchema.parse("Gabski"); //იქნება true რადგან არის string
mySchema.parse(18); // -> thrwos zogError, false, 