import express from "express";
import jwtAuth from "../Middleware/jwtAuth.js";

import authorizerole from "../Middleware/authorizemiddleware.js";


const dataRouter = express.Router();

dataRouter.route("/admin").get(jwtAuth,authorizerole('admin'),(req,res)=>{

    const data = {
        name: "abcinfo tech",
        email:"teastemail@gmail.com",
        msg:"msg by admin"
    };
    return res.status(200).json(
        data
     )
})
dataRouter.route("/manager").get(jwtAuth,authorizerole('admin','manger'),(req,res)=>{
    const data = {
        name: "abcinfo tech",
        email:"teastemail@gmail.com",
        msg:"msg by manager"
    };
    return res.status(200).json(
        data
     )
})
dataRouter.route("/user").get(jwtAuth, authorizerole('admin','user','manger'),(req,res)=>{
    const data = {
        name: "abcinfo tech",
        email:"teastemail@gmail.com",
        msg:"msg by user"
    };
    return res.status(200).json(
        data
     )
})

export default dataRouter;