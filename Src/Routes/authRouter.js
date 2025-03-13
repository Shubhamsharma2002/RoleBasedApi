import express from "express";
import { login, logout, register } from "../Controller/userController.js";

const authrouter = express.Router();
authrouter.route("/register").post(register);
authrouter.route("/login").post(login);
authrouter.route("/logout").post(logout)
authrouter.route("/check").get((req,res)=>{
    const data = {
        name: "abcinfo tech",
        email:"teastemail@gmail.com"
    };
    return res.status(200).json(
        data
     )
})
export default authrouter;