import { Router } from "express";
const router = Router();
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { Types } from "mongoose";
import User from "../models/user.js";

router.post("/signup", (req, res) => {
    bcrypt.hash(req.body.password, 10, (err, hash) => {
        if (err) {
            return res.status(500).json({ error: err });
        }
        const user = new User({
            _id: new Types.ObjectId(),
            username: req.body.username,
            password: hash
        });
        user.save().then(() => {
            res.status(201).json({ message: "User created" });
        });
    });
});


router.post("/login", (req, res) => {
    User.findOne({ username: req.body.username }).then(user => {
        if (!user) {
            return res.status(401).json({ message: "Auth failed" });
        }
        bcrypt.compare(req.body.password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign(
                    { username: user.username, userId: user._id },
                    "SECRET_KEY",
                    { expiresIn: "1h" }
                );
                return res.status(200).json({ token: token });
            }
            res.status(401).json({ message: "Auth failed" });
        });
    });
});

export default router;