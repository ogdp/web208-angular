import Product from "../models/product";
import productSchema from "../schemas/product";

export const getAll = async (req, res) => {
  try {
    const {
      _page = 1,
      _order = "asc",
      _sort = "createdAt",
      _limit = 10,
    } = req.query;
    const options = {
      page: _page,
      limit: _limit,
      sort: {
        [_sort]: _order == "desc" ? 1 : -1,
      },
    };
    const product = await Product.paginate({}, options);
    if (!product) {
      return res.status(400).json({
        message: "Danh sách rỗng",
      });
    }
    return res.status(200).json({
      // message: "Danh sách sản phẩm",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(400).json({
        message: "Sản phẩm không tồn tại",
      });
    }
    return res.status(200).json({
      message: "Lấy sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const create = async (req, res) => {
  try {
    const { error } = await productSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const product = await Product.create(req.body);
    return res.status(200).json({
      message: "Thêm sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const update = async (req, res) => {
  try {
    const { error } = await productSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const product = await Product.findByIdAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    return res.status(200).json({
      message: "Cập nhật sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.status(400).json({
        message: "Xoá sản phẩm thất bại",
      });
    }
    return res.status(200).json({
      message: "Xoá sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
