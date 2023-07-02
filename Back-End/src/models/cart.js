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
    name: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    price: {
      type: Number,
    },
    size: {
      type: String,
    },
    image: {
      type: Array,
      default: [],
    },
    user: {
      type: String,
      default: "notfound",
    },
    device: {
      type: String,
      default: "",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Cart", cartSchema);
