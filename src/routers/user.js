import express from "express";
import { get, getAll, remove, roleDisable, update } from "../controllers/user";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.get("/users", checkPermission, getAll);
router.get("/users/:id", checkPermission, get);
router.patch("/users/:id", checkPermission, update);
router.patch("/users/:id/disable", checkPermission, roleDisable);
router.patch("/users/:id/reset", checkPermission, roleDisable);
router.delete("/users/:id", checkPermission, remove);

export default router;
