import jwt from 'jsonwebtoken';
const jwtAuth =  async(req, res, next)=>{
    
    try {
        // 1. Read the token.
    const token = req.cookies.token;
        // console.log(token);
        
    // 2. if no token, return the error.
    if(!token){
        return res.status(401).json({
            message:"Not Authorized",
            success:false
        });
    }
    const decode  = await jwt.verify(
        token,
        process.env.SECERETE 
    );
    if(!decode){
        return res.status(401).json({
            message:"Invalid Token",
            success:false
        });
    }
    req.user = { id: decode.id, role: decode.role };
    next();
    } catch (error) {
        console.log(error);
    }
    
};

export default jwtAuth;