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
    Email : {
        type : String,
        required :true,
        unique: true,
        lowercase: true,
        match: /^\S+@\S+\.\S+$/,
    },
    UserName : {
        type : String,
        required : true,
        unique: true, // Ensure uniqueness of usernames
    },
    Password : {
        type : String,
        required : true
    }
})

const User = mongoose.model('User', UserSchema) // Changed the model name to 'User'
module.exports = User
