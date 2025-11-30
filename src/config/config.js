import express from "express";
import apiRoutes from "../routes/apiRoutes.js";

const config = express();
const PORT = process.env.PORT || 3000;

config.use(express.json());

config.use(apiRoutes);

export default config;