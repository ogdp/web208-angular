import express from "express";
import { create, get, getAll, remove, update } from "../controllers/bill";
import checkPermission from "../middlewares/checkPermission";
import checkPermissionMember from "../middlewares/checkPermissionMember";

const router = express.Router();

router.get("/bill", checkPermission, getAll);
router.get("/bill/:id", get);
router.post("/bill", checkPermissionMember, create);
router.patch("/bill/:id", checkPermissionMember, update);
router.delete("/bill/:id", checkPermissionMember, remove);

export default router;
