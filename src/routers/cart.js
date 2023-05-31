import express from "express";
import { create, get, getAll, remove, update } from "../controllers/cart";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.get("/cart", checkPermission, getAll);
router.get("/cart/:id", get);
router.post("/cart", create);
router.patch("/cart/:id", update);
router.delete("/cart/:id", remove);

export default router;
