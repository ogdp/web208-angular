import mongoose from "mongoose";
const billSchema = new mongoose.Schema(
  {
    cart_id: [
      {
        product: {
          type: mongoose.Types.ObjectId,
          ref: "Cart",
        },
        quantity: Number,
      },
    ],
    user_id: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    name: {
      type: String,
    },
    tel: {
      type: String,
    },
    email: {
      type: String,
      default: "",
    },
    address: {
      type: String,
    },
    price: {
      type: Number,
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
