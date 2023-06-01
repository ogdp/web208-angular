import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import categoryRouter from "./routers/category";
import productRouter from "./routers/product";
import authRouter from "./routers/auth";
const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", categoryRouter);
app.use("/api", productRouter);
app.use("/api", authRouter);

mongoose.connect(
  `mongodb+srv://thai9696:33554432@cluster1.yuunqxd.mongodb.net/?retryWrites=true&w=majority
  `
);

export const viteNodeApp = app;
