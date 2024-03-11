import "dotenv/config";

import mongoose from "mongoose";
import express from "express";

import indexRouter from "./routes/index.js";

mongoose
  .connect(process.env.MDB_CONNECTION_STRING, { dbName: "bullet" })
  .then(() => console.log("Connected to database"))
  .catch((error) =>
    console.error("Could not connect to database: " + error.message)
  );

const app = express();
app.set("views", "./views");
app.set("view engine", "pug");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));
app.use("/", indexRouter);

app.listen(8000);
