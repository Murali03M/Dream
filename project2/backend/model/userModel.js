const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength:30
    },
    password: {
        type: String,
        required: true,
        minLength: 7,
    },
   
    firstName: {
        type: String,
        required: true,
        maxLength:50
    },
    lastName: {
        type: String,
        required: true,
        maxLength:30
    },
    phone: {
        type:Number
    }

    
})


const User = mongoose.model('User', userSchema);


module.exports = User;