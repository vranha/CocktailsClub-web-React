const mongoose = require('mongoose');

const user = mongoose.Schema(
    {
        email: {
            type: String,
            required: [true, 'Please add a email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
        username: {
            type: String,
            require: [true, 'Please add a username'],
        },
        role: {
            enum: ["ADMIN_ROLE", "USER_ROLE"],
            type: String,
            default: "USER_ROLE",
            require: true
        },
        movil: {
            type: String,
            unique: true
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', user);
module.exports = User;
