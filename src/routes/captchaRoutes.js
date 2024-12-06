import express from "express";
import * as captchaController from "../controller/captchaController.js";

const router = express.Router();

router.get("/data", captchaController.getData);
router.get("/key", captchaController.generateUniqueKey);
router.get("/key/:key", captchaController.getKeyData);

export default router;
