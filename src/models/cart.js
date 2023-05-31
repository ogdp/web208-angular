import mongoose from "mongoose";

const cartSchema = new mongoose.Schema(
  {
    bill_id: {
      type: mongoose.Types.ObjectId,
      ref: "Bill",
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    product_id: {
      type: mongoose.Types.ObjectId,
      ref: "Product",
    },
    quantity: {
      type: Number,
    },
    note: {
      type: String,
      default: "",
    },
    device: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Cart", cartSchema);
