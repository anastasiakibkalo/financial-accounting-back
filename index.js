import express from "express";
import mongoose from "mongoose";
import cors from "cors";

import {
  registerValidation,
  loginValidation,
  categoryCreateValidation,
} from "./validations.js";

import { handleValidationErrors, checkAuth } from "./utils/index.js";

import { UserController, CategoryController } from "./controllers/index.js";

mongoose
  .connect(
    "mongodb+srv://root:root@cluster0.yn5vt.mongodb.net/financial-accounting?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => console.log(err));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Financial accounting");
});

app.post("/auth/login", loginValidation, UserController.login);
app.post("/auth/register", registerValidation, UserController.register);
app.get("/auth/me", checkAuth, UserController.getMe);

// CATEGORY CONTROLLERS
app.get("/categories", CategoryController.getAll);
app.post(
  "/categories",
  checkAuth,
  categoryCreateValidation,
  handleValidationErrors,
  CategoryController.create
);

app.listen(4444, (err) => {
  if (err) {
    return console.log(err);
  }

  console.log("Server OK");
});
