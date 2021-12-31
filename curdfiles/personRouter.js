const express = require('express')
const router = express.Router();
const Person = require('./personSchema')

router.post("/register",async (req,res) => {
    try{
        const user = await new Person(
        {
            name:req.body.name,
            email:req.body.email,
            reminder:req.body.reminder
        })
        const savePerson = await user.save();
        res.json(savePerson)
    }
    catch(err){
        res.status(400).json(err)
    }
})

router.put("/edit/:_id",async(req,res)=>{
    try{
        const updatePerson = await Person.updateOne({_id:req.params._id},{$set:{name:req.body.name,email:req.body.email,reminder:req.body.reminder}})
        res.json(updatePerson)
    }
    catch(err){
        res.status(400).json(err)
    }
})
router.delete("/delete/:_id",async(req,res)=>{
    try{
        const deletePerson = await Person.findByIdAndRemove({_id:req.params._id})
        res.json(deletePerson)
    }
    catch(err){
        res.status(400).json(err)
    }
})
router.get("/getAll",async(req,res)=>{
    try{
        const getAll = await Person.find();
        res.json(getAll)
    }
    catch(err){
        res.status(400).json(err)
    }
})

module.exports = router