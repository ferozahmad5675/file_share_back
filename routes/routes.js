import express from "express";
import { downloadImage, uploadImage } from "../controller/imgControl.js";
import upload from "../utls/middles.js";

const router = express.Router();

router.post("/upload", upload.single("file"), uploadImage);
router.get("/file/:fileId", downloadImage);
export default router;
