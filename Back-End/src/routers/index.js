import express from "express";
import categoryRouter from "./category";
import productRouter from "./product";
import authRouter from "./auth";
import userRouter from "./user";
import cartRouter from "./cart";
import billRouter from "./bill";
import uploadRouter from "./upload";

const Router = express.Router();

Router.use("", categoryRouter);
Router.use("", billRouter);
Router.use("", cartRouter);
Router.use("", productRouter);
Router.use("", authRouter);
Router.use("", userRouter);
Router.use("", uploadRouter);

export default Router;
