const express = require('express');
const app = express();
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose')
require("dotenv/config")
const fileUpload  =require('express-fileupload')
const personRouter = require('./personRouter')


app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use(fileUpload())

app.get("/",(req,res) => {
res.send("home"
)})

app.use("/person",personRouter)
app.listen(5000,() =>{
    console.log("server started")
})

mongoose.connect(process.env.MY_DB,(err => {
    console.log("db connected successfully")
}))
