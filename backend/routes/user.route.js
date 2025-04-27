import express from "express";
import { verifyToken } from '../middlewares/verifyToken.js'
import {
    getUser,
    loginUser,
    registerUser,
    logoutUser,
    followUser,
} from "../controllers/user.controller.js";
import User from '../models/user.model.js';

const router = express.Router()

router.delete("/delete", async(req,res) => {
    const deletedUser = await User.deleteOne({username:req.body.username}, req.body)

    res.json(deletedUser)
})

router.get("/:username", getUser)
router.post("/auth/register", registerUser);
router.post("/auth/login", loginUser);
router.post("/auth/logout", logoutUser);
router.post("/follow/:username", verifyToken, followUser);

export default router;