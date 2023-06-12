import mongoose from "mongoose";
import User from "../models/auth";
import Jwt from "jsonwebtoken";
const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    const isMatch = await Jwt.verify(token, "duc");
    const user = await User.findById(isMatch.id);
    if (user.role !== "admin") {
      return res.status(403).json({
        message: "Bạn không đủ quyền",
      });
    }
    next();
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export default checkPermission;
