import express from "express";
import { signup, signin, verifyToken } from "../controllers/auth";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/verifyToken/:id", verifyToken);
export default router;
