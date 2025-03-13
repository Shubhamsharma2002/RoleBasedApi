import { User } from "../Models/userModel";

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
        return res.status(201).json(user,"registered sucessfully");
     } catch (error) {
        console.log(error);
        
     }
}

export const login = async(req,res)=>{
    const {email ,password} = req.body;
    
}