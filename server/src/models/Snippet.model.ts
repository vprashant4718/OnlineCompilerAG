import mongoose from "mongoose";

const snippetSchema = new mongoose.Schema(
  {
    language: { type: String, required: true },
    code: { type: String, required: true },
    shareId: { type: String, required: true, unique: true },
  },
  { timestamps: true }
);

export const Snippet = mongoose.model("Snippet", snippetSchema);