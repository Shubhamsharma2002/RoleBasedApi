import express from "express";
import authrouter from "./authRouter.js";
import dataRouter from "./dataRouter.js";

const router = express.Router();
router.use("/auth",authrouter);
router.use("/data",dataRouter)
export default router;