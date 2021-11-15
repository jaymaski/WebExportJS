const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("config");
const db = require("../../config/db");
const { check, validationResult } = require("express-validator");

//User Model
const User = require("../../models/User");

// @route  POST api/users
// @desc   Register user
// @access Public

router.post(
    "/",
    [
        //Check for errors in input
        check("name", "Name is required").not().isEmpty(),
        check("email", "Please include a valid email").isEmail(),
        check(
            "password",
            "Please enter a password with 6 or more characters"
        ).isLength({ min: 6 }),
    ],
    async (req, res) => {
        //Check if input has no errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        // Get value from body
        var { name, email, password, admin } = req.body;
        try {
            //Check if email is already used
            let user = await User.count({
                where: {
                    email: email,
                },
            }).then((count) => {
                if (count > 0) {
                    return res
                        .status(400)
                        .json({ errors: [{ msg: "User already exists" }] });
                }
            });

            const salt = await bcrypt.genSalt(10);
            password = await bcrypt.hash(password, salt);

            console.log("creating my boi");
            User.create({
                name,
                email,
                password,
                admin,
            })
                .then()
                .catch((err) => console.log(err));

            const payload = {
                user: {
                    email: email,
                },
            };

            jwt.sign(
                payload,
                config.get("jwtSecret"),
                {
                    //Update when going to PROD
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
