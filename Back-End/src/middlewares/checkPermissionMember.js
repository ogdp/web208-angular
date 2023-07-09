import User from "../models/auth";
import Bill from "../models/bill";
import Jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
const { JWT_KEY, JWT_TOKEN_TIME } = process.env;
const checkPermission = async (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(400).json({
        message: "Bạn chưa đăng nhập",
      });
    }
    const token = req.headers.authorization.split(" ")[1];
    const isMatch = await Jwt.verify(token, JWT_KEY);
    const user = await User.findById(isMatch.id);
    // Lấy id url
    const id_url = req.params.id;
    // Lấy phần /bill/:id
    const parts = await req.url.split("/");
    const nameDB = (await parts[1].charAt(0).toUpperCase()) + parts[1].slice(1);
    // Admin toàn quyền thêm sửa xoá
    // Chỉ member của đơn hàng mới có quyền sửa đơn hàng
    if (user.role == "member" || user.role == "admin") {
      if (user.role == "member") {
        if (nameDB == "Bill") {
          if (!id_url) {
            return next();
          }
          const objGeted = await Bill.findById(id_url);
          const objUserId = JSON.stringify(objGeted.user_id);
          if (objUserId !== JSON.stringify(user._id)) {
            return res.status(403).json({
              message: "Bạn không đủ quyền",
            });
          }
        }
        next();
      } else if (user.role == "admin") {
        next();
      } else {
        return res.status(403).json({
          message: "Không tồn tại",
        });
      }
    } else {
      return res.status(403).json({
        message: "Bạn không đủ quyền",
      });
    }
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};
export default checkPermission;
