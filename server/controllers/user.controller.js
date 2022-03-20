const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');

// ====================================================== //
// ===================== GENERAR JWT ==================== //
// ====================================================== //

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
};

// ====================================================== //
// ====================== REGISTRO ====================== //
// ====================================================== //

// const registerUser = asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     if (!email || !password) {
//         res.status(400);
//         throw new Error('Please fill all fields');
//     }

//     // Check if user exists
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//         res.status(400);
//         throw new Error('User already exists');
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(password, salt);

//     // Create user
//     const user = await User.create({
//         email,
//         password: hashedPassword,
//     });

//     if (user) {
//         res.status(201).json({
//             _id: user.id,
//             email: user.email,
//             token: generateToken(user._id),
//         });
//     } else {
//         res.status(400);
//         throw new Error('Invalid user data');
//     }
// });

// ====================================================== //
// ======================== LOGIN ======================= //
// ====================================================== //

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check for user email
    const user = await User.findOne({ email });

    // Comprueba que haya usuario y compara password
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({
            _id: user.id,
            email: user.email,
            token: generateToken(user._id),
        });
    } else {
        res.status(400);
        throw new Error('Invalid credentials');
    }
});

module.exports = { registerUser, loginUser };
