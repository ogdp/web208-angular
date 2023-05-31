import Joi from "joi";

const cartSchema = Joi.object({
  bill_id: Joi.any(),
  user_id: Joi.any(),
  product_id: Joi.string().required().messages({
    "string.empty": "Product_id không được bỏ trống",
    "any.required": "Product_id là trường bắt buộc",
  }),
  quantity: Joi.number().required().messages({
    "number.empty": "Số lượng sản phẩm không được bỏ trống",
    "number.base": "Số lượng sản phẩm phải là số",
    "any.required": "Số lượng sản phẩm là trường bắt buộc",
  }),
  note: Joi.any(),
  device: Joi.any(),
});
export default cartSchema;
