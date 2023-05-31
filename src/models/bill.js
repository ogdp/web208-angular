import mongoose from "mongoose";

const billSchema = new mongoose.Schema(
  {
    cart_id: {
      type: mongoose.Types.ObjectId,
      ref: "Cart",
    },
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    phone: {
      type: String,
    },
    email: {
      type: String,
      default: "",
    },
    address: {
      type: String,
    },
    note: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      default: "Pedding",
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Bill", billSchema);
