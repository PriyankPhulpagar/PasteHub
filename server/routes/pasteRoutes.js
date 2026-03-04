const express = require("express");
const router = express.Router();
const protect = require("../middleware/authMiddleware");

const {
  getAllPastes,
  getPasteById,
  createPaste,
  updatePaste,
  deletePaste,
} = require("../controllers/pasteController");

router.get("/", protect, getAllPastes);
router.get("/:id", protect, getPasteById);
router.post("/", protect, createPaste);
router.put("/:id", protect, updatePaste);
router.delete("/:id", protect, deletePaste);

module.exports = router;