import express from "express";
import { signup, signin, getAll, get, verifyToken } from "../controllers/auth";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", checkPermission, getAll);
router.get("/users/:id", checkPermission, get);
router.get("/verifyToken/:id", verifyToken);
export default router;
