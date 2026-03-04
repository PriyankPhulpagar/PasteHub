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
router.get(
  "/google/callback",
  passport.authenticate("google", { session: false, failureRedirect: "/" }),
  (req, res) => {
    // Redirect to frontend with token
    res.redirect(
      `http://localhost:3000/auth-success?token=${req.user.token}`
    );
  }
);

module.exports = router;