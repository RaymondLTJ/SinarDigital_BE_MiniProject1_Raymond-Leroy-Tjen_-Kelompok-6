import express from "express";
import apiRoutes from "./apiRoutes.js";

const router = express.Router();

router.use("/", apiRoutes);

export default router;
