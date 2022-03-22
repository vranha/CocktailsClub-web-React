const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');
const passport = require('passport');

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
// ======================== REGISTER ==================== //
// ====================================================== //

// const checkSession = async (req, res, next) => {
//     if (req.user) {
//         let userRegister = req.user;
//         userRegister.password = null;

//         return res.status(200).json(userRegister);
//     } else {
//         return res.status(401).json({message: 'User not found'});
//     }
// };


const registerPost = async(req, res, next) => {
    console.log('Llega petición');
    console.log(req.body);
    const { email, password, username } = req.body;

    if (!password || !email || !username) {

        return res.status(400).json({ message: 'Completa todos los campos' });
        
    }

    passport.authenticate('register', (error, user) => {
        if (error) {
            return res.status(403).json({message: error.message}); //Error 403 forbidden, en el navegador, pero en postMan: usuario ya existente
        }

        req.logIn(user, (error) => {
            if (error) {
                return res.status(403).json({message: error.message});
            };

            let userRegister = user;
            userRegister.password = null;

            return res.json(userRegister);
        });
    })(req, res, next); //Invocamos aquí!!

};



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

// module.exports = { registerUser, loginUser, registerPost };
module.exports = { loginUser, registerPost};
