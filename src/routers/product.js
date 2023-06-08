import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
  search,
  updateFollowCategoryId,
} from "../controllers/product";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.get("/products", getAll);
router.get("/products/:id", get);
router.get("/products/search/:key", search);
router.post("/products", checkPermission, create);
router.post(
  "/products/updateFollowCateId",
  checkPermission,
  updateFollowCategoryId
);
router.patch("/products/:id", checkPermission, update);
router.delete("/products/:id", checkPermission, remove);

export default router;
