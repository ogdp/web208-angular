import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import categoryRouter from "./routers/category";
import productRouter from "./routers/product";
import authRouter from "./routers/auth";
import userRouter from "./routers/user";
import cartRouter from "./routers/cart";
import billRouter from "./routers/bill";
import dotenv from "dotenv";

dotenv.config();

const { URL_DB } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", categoryRouter);
app.use("/api", billRouter);
app.use("/api", cartRouter);
app.use("/api", productRouter);
app.use("/api", authRouter);
app.use("/api", userRouter);

mongoose.connect(`${URL_DB}`);

export const viteNodeApp = app;
