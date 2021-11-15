const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");
const config = require("config");
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");

// @route  GET api/auth
// @desc   Test route
// @access Public

router.get("/", auth, async (req, res) => {
    try {
        //const user = await User.findAll(req.user.id).select("-password");
        //console.log(req.user.id);
        res.json(req.email);
    } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
    }
});

// @route  POST api/auth
// @desc   Authenticate user & get token (login)
// @access Public

router.post(
    "/",
    [
        check("email", "Please include a valid email").isEmail(),
        check("password", "Password is required").exists(),
    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const { email, password } = req.body;

        try {
            let user = await User.findOne({ where: { email } });

            if (!user) {
                return res.status(400).json({
                    errors: [{ msg: "Invalid credentials" }],
                });
            }

            const isMatch = await bcrypt.compare(password, user.password);

            if (!isMatch) {
                return res.status(400).json({
                    errors: [{ msg: "Invalid credentials" }],
                });
            }

            const payload = {
                user: {
                    email: email,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"),
                {
                    expiresIn: 172800,
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({ token });
                }
            );
        } catch (err) {
            console.error(err.message);
            res.status(500).send("Server error");
        }
    }
);

module.exports = router;
