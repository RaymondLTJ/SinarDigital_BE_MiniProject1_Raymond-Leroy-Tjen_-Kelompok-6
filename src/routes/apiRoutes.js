import express from "express";
import {
    showMessage,
    createMessage,
    messageById
} from "../controllers/apiController.js";

const router = express.Router();

router.get("/message", showMessage);

router.post("/message", createMessage);

router.get("/message/:id",messageById);

export default router;
