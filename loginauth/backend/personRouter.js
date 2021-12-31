const express= require("express")
const router = express.Router();
const Person = require('./personSchema')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


router.post("/register",async(req,res) => {
    try{
        var emailExist = await Person.findOne({email:req.body.email})
        if(emailExist){
            return res.status(400).json("email already exist")
        }
        var hash = await bcrypt.hash(req.body.password,10)
        const user = await new Person({
            name:req.body.name,
            email:req.body.email,
            password:hash
        })
        const savePerson = await user.save();
        res.json(savePerson)
    }
    catch(err){
 res.status(400).json(err)
    }
 })
 
router.post("/login",async(req,res) => {
    try{
        var emailExist = await Person.findOne({email:req.body.email})
        if(!emailExist){
            return res.status(400).json("email not exits")
        }
        var validpwd = await bcrypt.compare(req.body.password,emailExist.password)
        if(!validpwd) {
        return res.status(400).json("enter a valid password")
        }
        const userToken = await jwt.sign({email:emailExist.email},'secret')
        res.header('auth',userToken).json(userToken)
    }
   catch(err){
      res.status(400).json(err)
  }
})
const validUser = (req,res,next) => {
    const token = req.header("auth")
    req.token = token;
    next();
}
router.get("/getAll",validUser,async(req,res) => {
    jwt.verify(req.token,'secret',async(err,data)=> {
if(err){
    res.status(500).json(err)
}
else{
    const data = await Person.find();
    res.status(200).json(data)
}
    })
   
})


router.post("/upload",(req,res) => {
    try{
        if(req.files === null){
                   res.status(400).json('no file is selected')
        }
        const file = req.files.file;
        file.mv(`${__dirname}/login/public/uploads/${file.name}`,(err => {
            if(err)
            {
                res.status(500).json("server error")
            }
            else {
                res.json({fileName:file.name,filePath:`uploads/${file.name}`})
            }
        }))

    } catch(err){
        res.status(400).json(err)
    }

   
})


module.exports = router