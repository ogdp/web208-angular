import Joi from "joi";

const cartSchema = Joi.object({
  bill_id: Joi.any(),
  user_id: Joi.any(),
  product_id: Joi.string().required().messages({
    "string.empty": "Product_id không được bỏ trống",
    "any.required": "Product_id là trường bắt buộc",
  }),
  name: Joi.string().required().messages({
    "string.empty": "Tên sản phẩm không được bỏ trống",
    "any.required": "Tên sản phẩm trường bắt buộc",
  }),
  quantity: Joi.number().required().messages({
    "number.empty": "Số lượng sản phẩm không được bỏ trống",
    "number.base": "Số lượng sản phẩm phải là số",
    "any.required": "Số lượng sản phẩm là trường bắt buộc",
  }),
  price: Joi.number().required().messages({
    "number.empty": "Giá sản phẩm không được bỏ trống",
    "number.base": "Giá sản phẩm phải là số",
    "any.required": "Giá sản phẩm là trường bắt buộc",
  }),
  size: Joi.string().required().messages({
    "string.empty": "Size sản phẩm không được bỏ trống",
    "any.required": "Size sản phẩm trường bắt buộc",
  }),
  image: Joi.any(),
  user: Joi.any(),
  device: Joi.string().required().messages({
    "string.empty": "Thiết bị không được bỏ trống",
    "any.required": "Thiết bị trường bắt buộc",
  }),
});
export default cartSchema;
