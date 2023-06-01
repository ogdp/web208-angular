import User from "../models/auth";
import { signinSchema, signupSchema } from "../schemas/auth";
import Jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
export const signup = async (req, res) => {
  try {
    const { error } = await signupSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const userExist = await User.findOne({
      email: req.body.email,
    });
    if (userExist) {
      return res.status(400).json({
        message: "Email đã tồn tại",
      });
    }
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    const user = await User.create(req.body);
    user.password = undefined;
    return res.status(200).json({
      message: "Tạo tài khoản thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const signin = async (req, res) => {
  try {
    const { error } = await signinSchema.validate(req.body, {
      abortEarly: false,
    });
    if (error) {
      return res.status(400).json({
        error: error.details.map((err) => err.message),
      });
    }
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(400).json({
        message: "Email không tồn tại",
      });
    }
    const isMatch = await bcrypt.compare(req.body.password, user.password);
    if (!isMatch) {
      return res.status(400).json({
        message: "Mật khẩu không chính xác",
      });
    }
    user.password = undefined;
    const token = await Jwt.sign({ id: user.id }, "duc", { expiresIn: "1h" });
    return res.status(200).json({
      message: "Đăng nhập thành công",
      accessToken: token,
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const getAll = async (req, res) => {
  try {
    const users = await User.find();
    if (!users) {
      return res.status(400).json({
        message: "Không có khách hàng",
      });
    }
    return res.status(200).json({
      message: "Danh sách khách hàng",
      users,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
  console.log("AAA");
};
export const get = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(400).json({
        message: "Danh mục rỗng",
      });
    }
    return res.status(200).json({
      message: "Lấy danh mục thành công",
      user,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export const verifyToken = async (req, res) => {
  try {
    const token = req.params.id;
    const isMatch = await Jwt.verify(token, "duc");
    const user = await User.findById(isMatch.id);
    // console.log(user);
    if (!user) {
      return res.status(403).json({
        message: "Token không hợp lệ",
      });
    }
    if (user.role == "member") {
      return res.status(200).json({
        message: "account member",
        user,
      });
    }
    if (user.role == "admin") {
      return res.status(200).json({
        message: "account admin",
        user,
      });
    }
    return res.status(403).json({
      message: "Token error",
      token: req.params.id,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
