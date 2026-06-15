const authMiddleware=(req,res,next)=>{
    const incomingtoken=req.headers.authorization;
    //console.log(incomingtoken);
    const token= incomingtoken.split(" ")[1];
    if(!token){
        return res.status(401).json({
            success:false,
            message:'Access Denied. No Token Provided.'
        })
    }
    if(token !=='mySecretToken'){ //mySecretToken-> Bearer SecretToken
        return res.status(401).json({
            success:false,
            message:'Invalid.'
        })
    }
     
    next();
}

export default authMiddleware;