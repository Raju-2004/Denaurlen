const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require('mongoose')
const { mongoDbUrL, PORT } = require("./config/configuration");

const User = require('./models/UserSchema')
const userRoutes = require('./routes/user')
const otpRoutes = require('./routes/Otp')

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

mongoose.connect(mongoDbUrL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
})

const db = mongoose.connection

db.on('error',console.error.bind(console,"Connection error"))
db.once("open",()=>{
    console.log("Connected to MongoDB");
})

app.get('/',(req,res)=>{
    res.send('hii');
})

app.use('/',userRoutes)
app.use('/',otpRoutes)

app.listen(PORT, () => {
    console.log("app is listening at " + `http://localhost:${PORT}`);
});