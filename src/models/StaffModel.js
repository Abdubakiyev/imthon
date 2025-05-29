import mongoose from "mongoose";

const staffSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "branch", required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  birthDate: { type: String, required: true },
  gender: { type: String, required: true },
});

export const staffModel = mongoose.model("staff", staffSchema);
