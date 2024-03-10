import express from "express";
import mongoose from "mongoose";

const router = express.Router();

const messages = [
  {
    message: "Hi there!",
    name: "Amando",
    added: new Date(),
  },
  {
    message: "Hello World!",
    name: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res, next) => {
  res.render("index", { data: messages });
});

export default router;
