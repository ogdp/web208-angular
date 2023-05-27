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
  `mongodb+srv://duclqmph28383:duclqmph28383@cluster0.uhzph4w.mongodb.net/`
);

export const viteNodeApp = app;
