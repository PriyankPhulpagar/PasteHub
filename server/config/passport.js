const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");
const jwt = require("jsonwebtoken");

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "/auth/google/callback",
        },
        async (accessToken, refreshToken, profile, done) => {
            try {
                console.log("GOOGLE PROFILE:", profile);
                let user = await User.findOne({ googleId: profile.id });

                if (!user) {
                    user = await User.create({
                        googleId: profile.id,
                        name: profile.displayName,
                        email: profile.emails[0].value,
                        picture: profile.photos[0].value + "?sz=200",
                    });
                }

                const token = jwt.sign(
                    {
                        id: user._id,
                        name: user.name,
                        email: user.email,
                        picture: user.picture,
                    },
                    process.env.JWT_SECRET,
                    { expiresIn: "7d" }
                );

                return done(null, { user, token });
            } catch (error) {
                return done(error, null);
            }
        }
    )
);

module.exports = passport;