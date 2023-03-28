import { body } from "express-validator";

export const registerValidation = [
  body("email", "Email is wrong").isEmail(),
  body("password", "Password is short").isLength({ min: 5 }),
  body("firstName", "First Name is short").isLength({ min: 3 }),
  body("secondName", "Second Name is short").isLength({ min: 3 }),
  body("avatarUrl", "Doesn't correct url").optional().isURL(),
];

export const loginValidation = [
  body("email", "Email is wrong").isEmail(),
  body("password", "Password is short").isLength({ min: 5 }),
];

export const postCreateValidation = [
  body("title", "Title is required").isLength({ min: 3 }).isString(),
  body("text", "text is required").isLength({ min: 3 }).isString(),
  body("tags", "Need array of tags").optional().isString(),
  body("imageUrl", "Image's url is wrong").optional().isString(),
];
