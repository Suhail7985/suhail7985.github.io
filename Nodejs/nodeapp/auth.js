const auth=( req,res,next) =>{
    if(req.headers.authorization)
    {
        next();
    }
    else{
        res.json({message: "Invalid Token"});
    }
};
export default auth ;