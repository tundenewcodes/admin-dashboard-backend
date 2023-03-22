import express from "express";
import { getAdmins, getUserPerformance } from "../controllers/managementCtrl.js";

const router = express.Router();

router.get("/admins", getAdmins);
router.get("/performance/:id", getUserPerformance);

export default router;
