import express from "express";
import { get, getAll, remove, update } from "../controllers/user";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.get("/users", checkPermission, getAll);
router.get("/users/:id", checkPermission, get);
router.patch("/users/:id", checkPermission, update);
router.delete("/users/:id", checkPermission, remove);

export default router;
