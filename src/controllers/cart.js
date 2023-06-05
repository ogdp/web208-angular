import Cart from "../models/cart";
import cartSchema from "../schemas/cart";

export const getAll = async (req, res) => {
  try {
    const cart = await Cart.find();
    if (!cart) {
      return res.status(400).json({
        message: "Giỏ hàng rỗng",
      });
    }
    return res.status(200).json({
      message: "Danh sách giỏ hàng",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id);
    if (!cart) {
      return res.status(400).json({
        message: "Giỏ hàng rỗng",
      });
    }
    return res.status(200).json({
      message: "Lấy giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const getFollowDevice = async (req, res) => {
  try {
    const details = req.params.id;
    const cart = await Cart.find({ device: { $regex: details } });
    if (!cart) {
      return res.status(400).json({
        message: "Giỏ hàng rỗng",
      });
    }
    return res.status(200).json({
      message: "Lấy giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const updateFollowDevice = async (req, res) => {
  try {
    const cart_token = req.params.id;
    const filter = { device: cart_token };
    const update = { device: "checkout successfully" };
    const cart = await Cart.updateMany(filter, update, {
      new: true,
    });
    if (!cart) {
      return res.status(400).json({
        message: "Cập nhật device giỏ hàng thất bại",
      });
    }
    return res.status(200).json({
      message: "Cập nhật device giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = await cartSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const cart = await Cart.create(req.body);
    return res.status(200).json({
      message: "Thêm giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = await cartSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const cart = await Cart.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Cập nhật giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return res.status(400).json({
        message: "Xoá giỏ hàng thất bại",
      });
    }
    return res.status(200).json({
      message: "Xoá giỏ hàng thành công",
      cart,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
