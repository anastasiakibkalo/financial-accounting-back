import { body } from "express-validator";

export const registerValidation = [
  body("email", "Email is wrong").isEmail(),
  body("password", "Password is short").isLength({ min: 5 }),
  body("name", "First Name is short").isLength({ min: 3 }),
  body("surname", "Second Name is short").isLength({ min: 3 }),
];

export const loginValidation = [
  body("email", "Email is wrong").isEmail(),
  body("password", "Password is short").isLength({ min: 5 }),
];

export const categoryCreateValidation = [
  body("title", "Title is required").isLength({ min: 3 }).isString(),
  body("amount", "Amount is non a number").isNumeric(),
  body("budget", "Budget is non a number").isNumeric(),
  body("icon", "Icon is wrong").isString(),
  body("currency", "Currency is required").isString(),
];
