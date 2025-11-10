import express from "express";
import { createSessionHandler, getSessionHandler } from "../controller/sessionController.js";

const router = express.Router();

router.post("/create-session", createSessionHandler);
router.get("/get-session/:uid", getSessionHandler);

export default router;
