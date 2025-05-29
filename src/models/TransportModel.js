import mongoose from "mongoose";

const transportSchema = new mongoose.Schema({
  branch: { type: mongoose.Schema.Types.ObjectId, ref: "branch", required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  img: { type: String, required: false }, // rasm url yoki fayl nomi
  price: { type: Number, required: true },
  time: { type: String, required: true }, // misol uchun ishlab chiqarilgan yil yoki boshqa vaqt
});

export const transportModel = mongoose.model("transport", transportSchema);
