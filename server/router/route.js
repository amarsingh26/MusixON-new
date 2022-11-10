// const express = require('express');
// const router = express.Router();
// const bcrypt = require('bcryptjs');


// require('../db/conn');
// const User = require('../models/schema');
// const { response } = require('express');







// router.get('/' , (req, res) =>{
//     res.send("server is responding");
// })
// router.post('/register' , async (req , res)=>{
//     const{name , email , phone ,Gender , password , cpassword} = req.body;
//     if(!name || !email || !phone || !Gender || !password || !cpassword){
//         return res.status(422).json({error: "complete the details"});
//     }
//     try{

//      const userExist = await User.findOne({email:email});
//      if(userExist){
//         return res.status(422).json({error: "user already exits"});
//      }
//      else if(password != cpassword){
//         return res.status(422).json({error: "passwords are not matching"});
//      }
//      else{
//         const user = new User({name , email , phone ,Gender , password , cpassword});

//         await user.save();
   
       
//         return res.status(201).json({message:"user Registered Successfully"});
        
//      }
    
    
//     }catch(err){
//         console.log(err);
//     }
    
// })
// router.post('/login' , async (req , res)=>{
//     try{
//         const{email , password}= req.body;

//         if(!email || !password){
//             return res.status(421).json({error : "Enter Complete Details"});
//         }
//         const userExist= await User.findOne({email : email});

//         if(userExist){
//         const verify = await bcrypt.compare(password , userExist.password);
        
        

//         if(!verify){
//             return res.status(421).json({error : "Invalid credentials"});
//         }else{
//             const token = await userExist.generateAuthToken();
//             console.log(token);

//             res.cookie("auth_token" , token , {
//                 expires:new Date(Date.now()+257890142),
//                 httpOnly:true
//             });
//             res.status(201).json({message:"user Signin Successfully"});
//         }
//         }
//         else{
//             res.status(421).json({error : "user doesn't exist"});
//         }


//     }catch(err){
//         console.log(err);
//     }
    
// })

// module.exports = router;

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");
const jwt = require("jsonwebtoken");
const cookeParser = require('cookie-parser');

router.use(cookeParser());
require('../db/conn');
const User = require('../models/schema');
const { response } = require('express');
router.get('/' , (req, res) =>{
    res.send("server is responding");
})
router.post('/register' , async (req , res)=>{
    const{name , email , phone ,Gender , password , cpassword} = req.body;
    if(!name || !email || !phone || !Gender || !password || !cpassword){
        return res.status(422).json({error: "complete the details"});
    }
    try{

     const userExist = await User.findOne({email:email});
     if(userExist){
        return res.status(422).json({error: "user already exits"});
     }
     else if(password != cpassword){
        return res.status(422).json({error: "passwords are not matching"});
     }
     else{
        const user = new User({name , email , phone ,Gender , password , cpassword});

        await user.save();
   
       
        return res.status(201).json({message:"user Registered Successfully"});
        
     }
    
    
    }catch(err){
        console.log(err);
    }
    
})
router.post('/login' , async (req , res)=>{
    try{
        const{email , password}= req.body;

        if(!email || !password){
            return res.status(421).json({error : "Enter Complete Details"});
        }
        const userExist= await User.findOne({email : email});

        if(userExist){
        const verify = await bcrypt.compare(password , userExist.password);
        const token = await userExist.generateAuthToken(); 
        console.log(token);

          

        if(!verify){
            return res.status(421).json({error : "Invalid credentials"});
        }else{
            res.cookie("jwtoken" , token , {
                expires:new Date(Date.now()+257890142),
                httpOnly:true
            }); 
            res.status(201).json({message:"user Signin Successfully"});
        }
        }
        else{
            res.status(421).json({error : "user doesn't exist"});
        }


    }catch(err){
        console.log(err);
    }
    
})
router.get('/library', authenticate  ,(req,res)=>{
    console.log("This is library");
    res.send(req.userExst);
})
router.get('/feed', authenticate  ,(req,res)=>{
    console.log("This is Feed");
    res.send(req.userExst);
})
router.get('/trending', authenticate  ,(req,res)=>{
    console.log("This is trending");
    res.send(req.userExst);
})
router.get('/player', authenticate  ,(req,res)=>{
    console.log("This is player");
    res.send(req.userExst);
})
router.get('/favorites', authenticate  ,(req,res)=>{
    console.log("This is favorites");
    res.send(req.userExst);
})
router.get('/logout', function(req, res){
    res.clearCookie('jwtoken');
    res.status(200).send('cookie cleared');
 });

module.exports = router;