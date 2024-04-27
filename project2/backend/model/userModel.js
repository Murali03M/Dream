const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    firstName: {
        type: String,
        required: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        maxLength: 30
    },
    phone: {
        type: Number
    },
    // Array of todo ObjectId references
    todos: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Todo'
    }]
});

// Create the User model using the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
