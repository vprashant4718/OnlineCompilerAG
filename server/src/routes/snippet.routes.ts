import express from "express";
import {
  createSnippet,
  getSnippet,
} from "../controllers/snippet.controller";

const router = express.Router();

router.post("/share", createSnippet);
router.get("/:shareId", getSnippet);

export default router;