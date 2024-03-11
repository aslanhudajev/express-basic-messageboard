import express from "express";
import message from "../models/message.js";

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

router.get("/", async (req, res, next) => {
  const data = await message.find().sort({added: -1});
  res.render("index", { messages: data });
});

router.post("/new", async (req, res, next) => {
    const formData = req.body;
    await message.create({
        name: formData.name,
        added: Date.now(),
        message: formData.message
    });

    res.redirect("/");
});

export default router;
