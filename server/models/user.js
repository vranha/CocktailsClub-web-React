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
            type: String,
            require: [true, 'Please add a role']
        }
    },
    { timestamps: true }
);

const User = mongoose.model('User', user);
module.exports = User;
