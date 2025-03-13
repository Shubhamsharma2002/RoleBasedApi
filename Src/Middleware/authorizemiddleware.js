const authorizerole = (...allowedRoles) =>{
    return (req,res,next)=>{
        if(!allowedRoles.includes(req.user.role)){
            return res.status(403).json({message:"acess denied"});
        }
        next();
    }
}

export default authorizerole;