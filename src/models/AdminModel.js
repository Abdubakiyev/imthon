import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    birthDate: { type: String, required: true },
    gender: { type: String, required: true },
    role: { type: String, default: "SuperAdmin" },
  },
  { timestamps: true }
);

export const adminModel = model("admins", adminSchema);
