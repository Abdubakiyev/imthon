import { Schema, model } from "mongoose";

const permissionSchema = new Schema(
  {
    staff: {
      type: Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    permissionModel: {
      type: String,
      required: true,
      enum: ["branch", "transport", "staff", "admin", "permission"],
    },
    permissions: {
      create: { type: Boolean, default: false },
      read: { type: Boolean, default: false },
      update: { type: Boolean, default: false },
      delete: { type: Boolean, default: false },
    },
  },
  {
    timestamps: true,
  }
);

export const permissionModel = model("permissions", permissionSchema);
