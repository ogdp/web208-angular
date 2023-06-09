import User from "../models/auth";
import { signupSchema } from "../schemas/auth";

export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({
        message: "Không có người dùng",
      });
    }
    return res.status(200).json({
      message: "Danh sách người dùng",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        message: "Danh sách người dùng rỗng",
      });
    }
    return res.status(200).json({
      message: "Lấy danh sách người dùng thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = await signupSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Cập nhật người dùng thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(400).json({
        message: "Xoá người dùng thất bại",
      });
    }
    return res.status(200).json({
      message: "Xoá người dùng thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const roleDisable = async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Cập nhật người dùng thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

