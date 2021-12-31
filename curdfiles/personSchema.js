const mongoose = require('mongoose')

const personSchema = mongoose.Schema({
    name:{
        type:String,
        requires:true
    },
    email:{
        type:String,
        requires:true
    },
    reminder:{
        type:Boolean,
        requires:true
    }
})
module.exports = mongoose.model("person",personSchema)