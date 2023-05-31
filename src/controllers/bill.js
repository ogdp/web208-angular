import Bill from "../models/bill";
import billSchema from "../schemas/bill";

export const getAll = async (req, res) => {
  try {
    const bill = await Bill.find();
    if (!bill) {
      return res.status(400).json({
        message: "Đơn hàng rỗng",
      });
    }
    return res.status(200).json({
      message: "Danh sách đơn hàng",
      bill,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const bill = await Bill.findById(req.params.id);
    if (!bill) {
      return res.status(400).json({
        message: "Đơn hàng rỗng",
      });
    }
    return res.status(200).json({
      message: "Lấy đơn hàng thành công",
      bill,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = await billSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const bill = await Bill.create(req.body);
    return res.status(200).json({
      message: "Thêm đơn hàng thành công",
      bill,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = await billSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const bill = await Bill.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Cập nhật đơn hàng thành công",
      bill,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const bill = await Bill.findByIdAndDelete(req.params.id);
    if (!bill) {
      return res.status(400).json({
        message: "Xoá đơn hàng thất bại",
      });
    }
    return res.status(200).json({
      message: "Xoá đơn hàng thành công",
      bill,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
