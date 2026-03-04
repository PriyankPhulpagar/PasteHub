const express = require("express");
const passport = require("passport");

const router = express.Router();

// Start Google Auth
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"],
    prompt: "select_account",
  })
);

// Google Callback
// authRoutes.js
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false }),
  (req, res) => {
    const token = req.user.token;

    // Redirect to frontend production URL
    res.redirect(`${process.env.CLIENT_URL}/auth-success?token=${token}`);
  }
);

module.exports = router;