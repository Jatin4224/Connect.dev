import { Router } from "express";
import { profile } from "../controller/profile.controller.js";
import isAuthenticated from "../middleware/auth.js";
const router = Router();

router.post("/profile", isAuthenticated, profile);
export default router;
