import sendEmail from "../Middleware/mailer.js";
import { User } from "../Models/userModel.js";
import bcrypt from "bcryptjs";
export const register = async(req,res)=>{
     try {
          const {name,email ,role,password} = req.body;
          if(!name || !email || !role){
             return res.status(400).json("All feild are required");
          }
        const checkEmail = await User.findOne({email});
        if(checkEmail){
            return res.status(400).json("Email Alredy exsit with other account");
        }
        const hashedPassword = await bcrypt.hash(password,10);
        const user = await User.create({
            name,
            email,
            role,
            password:hashedPassword
        })
      await sendEmail(email, 'Registration Sucessfully',`${name} You are sucessfuly registred with the team`,"registion scusessfull");
      return res.status(201).json({
        message: 'User registered successfully',
        user: {
          name: user.name,
          email: user.email,
          role: user.role,
          id: user._id,
        },
      });
      
        
     } catch (error) {
        console.log(error);
        
     }
}

export const login = async(req,res)=>{
    const {email ,password} = req.body;
     
    const user = await User.findOne({email});
    if(!user){
        return res.status(400).json("invalid credential");
    }
    const matchPassword = await bcrypt.compare(password,user.password);
    if(!matchPassword){
        return res.status(400).json("invalid credential");
    }
    const token = Jwt.sign(
        {id:user._id , role: user.role},
         process.env.SECERETE,
         {expiresIn:"1hr"}
    );
    return res.status(200)
    .cookie("token",token,{maxAge:1*24*60*60*1080, httpsOnly:true,sameSite:'strict'})
    .json(200,`welcome back ${user.name}`);
}

export const logout = async (req,res)=>{
    try {
       return res.status(200)
       .cookie("token","",{maxAge:0})
      //  .json({
      //      message:"Logout successfully",
      //      success:true
      //  })
      .json(
        "Logout successfully"
       )
    } catch (error) {
      console.log("error in logout block", error);
      
    }
}