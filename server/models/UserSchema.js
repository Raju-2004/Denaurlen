const mongoose = require('mongoose')

const UserSchema = mongoose.Schema({
    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true
    },
    Location : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required :true,
        unique: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    username : {
        type : String,
        required : true,
        unique: true
    },
    Password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('user',UserSchema)
module.exports = User