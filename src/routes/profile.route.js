import { Router } from "express";
import { profile, profileEdit } from "../controller/profile.controller.js";
import isAuthenticated from "../middleware/auth.js";
const router = Router();

router.post("/profile", isAuthenticated, profile);
router.patch("/profile/edit", isAuthenticated, profileEdit);
export default router;
