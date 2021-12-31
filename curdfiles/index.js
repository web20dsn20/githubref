const express = require('express')
const app = express();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')
require("dotenv/config")
const personRouter = require('./personRouter')


app.use(morgan('dev'))
app.use(express.json())
app.use(cors())
app.get("/",(req,res) => {
    res.send("home")
})

app.use("/person",personRouter)
app.listen(5000,() => {
    console.log("server started")
})

mongoose.connect(process.env.MY_DB,(err)=>{
    if(!err){
        console.log("db connected successfully")
    }
})