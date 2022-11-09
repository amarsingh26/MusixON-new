const jwt = require('jsonwebtoken');
const User = require('../models/schema');
const Authenticate = async(req , res , next)=>{
   try{
    
    const token = req.cookies.jwtoken;
    const isVerified = jwt.verify(token , process.env.KEY);

    const userExst = await User.findOne({_id: isVerified._id , "tokens.token": token});

    if(!userExst){
       throw new Error('User not found')
    }
    req.token = token;
    req.userExst = userExst;
    req.userId = userExst._id;
  
    next();

   }catch(err){
    res.status(401).json({error : "unauthorised access"});
    console.log(err);
   }
}
module.exports = Authenticate;