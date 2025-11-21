import express from "express";
import { getMicrosite, updateMicrosite } from "../controllers/micrositeController.js";

const router = express.Router();

router.get("/:id", getMicrosite);
router.put("/:id", updateMicrosite);

export default router;

