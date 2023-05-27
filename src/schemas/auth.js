import Joi from "joi";

export const signupSchema = Joi.object({
  name: Joi.string().required().messages({
    "string.empty": "Tên không được bỏ trống",
    "any.required": "Tên là trường bắt buộc",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email không được bỏ trống",
    "string.email": "Email không hợp lệ",
    "any.required": "Email là trường bắt buộc",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Mật khẩu không được bỏ trống",
    "string.min": "Mật khẩu tối thiểu {#limit} ký tự",
    "any.required": "Mật khẩu là trường bắt buộc",
  }),
  confirmPassword: Joi.valid(Joi.ref("password")).messages({
    "any.only": "Confirm password không chính xác",
  }),
});
export const signinSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email không được bỏ trống",
    "string.email": "Email không hợp lệ",
    "any.required": "Email là trường bắt buộc",
  }),
  password: Joi.string().min(6).required().messages({
    "string.empty": "Mật khẩu không được bỏ trống",
    "string.min": "Mật khẩu tối thiểu {#limit} ký tự",
    "any.required": "Mật khẩu là trường bắt buộc",
  }),
});
