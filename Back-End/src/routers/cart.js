import express from "express";
import {
  create,
  get,
  getAll,
  remove,
  update,
  getFollowDevice,
  updateFollowDevice,
} from "../controllers/cart";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.get("/cart", checkPermission, getAll);
router.get("/cart/:id", get);
router.get("/cart/device/:id", getFollowDevice);
router.patch("/cart/device/:id", updateFollowDevice);
router.post("/cart", create);
router.patch("/cart/:id", update);
router.delete("/cart/:id", remove);

export default router;
