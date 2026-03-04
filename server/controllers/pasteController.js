const Paste = require("../models/Paste");

// Get all pastes
exports.getAllPastes = async (req, res) => {
  try {
    const pastes = await Paste.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });
    res.json(pastes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get paste by ID
exports.getPasteById = async (req, res) => {
  try {
    const paste = await Paste.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!paste) {
      return res.status(404).json({ message: "Paste not found" });
    }

    res.json(paste);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create new paste
exports.createPaste = async (req, res) => {
  try {
    const { title, content } = req.body;

    const newPaste = new Paste({
      title,
      content,
      userId: req.user._id,
    });

    const savedPaste = await newPaste.save();
    res.status(201).json(savedPaste);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update paste
exports.updatePaste = async (req, res) => {
  try {
    const { title, content } = req.body;

    const updatedPaste = await Paste.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      { title, content },
      { new: true }
    );

    if (!updatedPaste) {
      return res.status(404).json({ message: "Paste not found" });
    }

    res.json(updatedPaste);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete paste
exports.deletePaste = async (req, res) => {
  try {
    const deletedPaste = await Paste.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!deletedPaste) {
      return res.status(404).json({ message: "Paste not found" });
    }

    res.json({ message: "Paste deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};