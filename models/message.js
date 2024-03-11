import mongoose from "mongoose";

const Schema = mongoose.Schema;

const messageSchema = new Schema({
  name: { type: String, minLength: 2, maxLength: 100, required: true },
  added: { type: Date },
  message: { type: String, maxLength: 256, required: true },
});

export default mongoose.model("Messages", messageSchema);