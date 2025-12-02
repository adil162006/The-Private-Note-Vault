import express from "express";
import { getNotes, createNote, deleteNote } from "../controllers/note.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();


router.get("/", protectRoute, getNotes);


router.post("/", protectRoute, createNote);


router.delete("/:id", protectRoute, deleteNote);

export default router;
