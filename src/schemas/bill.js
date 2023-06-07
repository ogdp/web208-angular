import Joi from "joi";

const billSchema = Joi.object({
  // list_cart: Joi.any().required().messages({
  //   "any.required": "Cart_id là trường bắt buộc",
  // }),
  // user_id: Joi.string().required().messages({
  //   "string.empty": "User_id không được bỏ trống",
  //   "any.required": "User_id là trường bắt buộc",
  // }),
  // name: Joi.string().required().messages({
  //   "string.empty": "Tên người nhận không được bỏ trống",
  //   "any.required": "Tên người nhận trường bắt buộc",
  // }),
  // tel: Joi.string().required().messages({
  //   "string.empty": "Điện thoại không được bỏ trống",
  //   "any.required": "Điện thoại là trường bắt buộc",
  // }),
  // email: Joi.any(),
  // address: Joi.string().required().messages({
  //   "string.empty": "Địa chỉ không được bỏ trống",
  //   "any.required": "Địa chỉ là trường bắt buộc",
  // }),
  // price: Joi.number().required().messages({
  //   "any.required": "Giá là trường bắt buộc",
  // }),
  list_cart: Joi.any(),
  user_id: Joi.string(),
  name: Joi.string(),
  tel: Joi.string(),
  email: Joi.any(),
  address: Joi.string(),
  price: Joi.number(),
  note: Joi.any(),
  status: Joi.any(),
});
export default billSchema;
