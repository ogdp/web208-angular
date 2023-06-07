import mongoose from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";
const billSchema = new mongoose.Schema(
  {
    list_cart: [
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
      default: "pending",
    },
  },
  { timestamps: true, versionKey: false }
);
billSchema.plugin(mongoosePaginate);
export default mongoose.model("Bill", billSchema);
