import Joi from "joi";

const billSchema = Joi.object({
  user_id: Joi.string().required().messages({
    "string.empty": "User_id không được bỏ trống",
    "any.required": "User_id là trường bắt buộc",
  }),
  cart_id: Joi.string().required().messages({
    "string.empty": "Cart_id không được bỏ trống",
    "any.required": "Cart_id là trường bắt buộc",
  }),
  name: Joi.string().required().messages({
    "string.empty": "Tên người nhận không được bỏ trống",
    "any.required": "Tên người nhận trường bắt buộc",
  }),
  phone: Joi.string().required().messages({
    "string.empty": "Điện thoại không được bỏ trống",
    "any.required": "Điện thoại là trường bắt buộc",
  }),
  email: Joi.any(),
  address: Joi.string().required().messages({
    "string.empty": "Địa chỉ không được bỏ trống",
    "any.required": "Địa chỉ là trường bắt buộc",
  }),
  note: Joi.any(),
  status: Joi.any(),
});
export default billSchema;
