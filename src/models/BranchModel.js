import mongoose from "mongoose";

const branchSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  time: { type: String, required: true },
});

export const branchModel = mongoose.model("branch", branchSchema);
