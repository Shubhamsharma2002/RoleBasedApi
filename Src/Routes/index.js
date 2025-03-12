import express from "express";
import authrouter from "./authRouter.js";

const router = express.Router();
router.use("/auth",authrouter);

export default router;