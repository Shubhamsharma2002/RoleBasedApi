import express from "express";

const authrouter = express.Router();
authrouter.route("/register").post();
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