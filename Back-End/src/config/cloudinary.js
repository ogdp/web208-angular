import { v2 as cloudinary } from "cloudinary";
const { CLOUNDINARY_NAME, CLOUNDINARY_API_KEY, CLOUNDINARY_API_SECRET } =
  process.env;
cloudinary.config({
  cloud_name: CLOUNDINARY_NAME,
  api_key: CLOUNDINARY_API_KEY,
  api_secret: CLOUNDINARY_API_SECRET,
});

export default cloudinary;
