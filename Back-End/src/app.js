import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import Router from "./routers/index";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// Console log router request to terminal (Morgan)
app.use(morgan("tiny"));

const { URL_DB, PORT } = process.env;

// Navigation
app.use("/api", Router);

mongoose.connect(`${URL_DB}`);

app.listen(PORT, (err, res) => console.log("Listening on port => " + PORT));
export const viteNodeApp = app;
