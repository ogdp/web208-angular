import express from "express";
import { signup, signin, getAll, get } from "../controllers/auth";
import checkPermission from "../middlewares/checkPermission";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/users", checkPermission, getAll);
router.get("/users/:id", checkPermission, get);
export default router;
