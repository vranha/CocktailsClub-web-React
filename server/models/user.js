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
    },
    { timestamps: true }
);

const User = mongoose.model('User', user);
module.exports = User;
