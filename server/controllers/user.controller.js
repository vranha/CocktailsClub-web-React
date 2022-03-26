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
// ======================== REGISTER ==================== //
// ====================================================== //

const checkSession = async (req, res, next) => {
    if (req.user) {
        let userRegister = req.user;
        userRegister.password = null;

        return res.status(200).json(userRegister);
    } else {
        return res.status(401).json({message: 'User not found'});
    }
};


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
// ================ LOGIN WITH PASSPORT ================= //
// ====================================================== //

const loginPost = (req, res, next) => {
    passport.authenticate("login", (error, user) => {
        if (error) {
            return res.status(401).json({ message: error.message });
        }

        req.logIn(user, (error) => {
            if (error) {
                return next(error);
                // return res.status(403).json({ message: error.message });
            };
            let userLogged = user;
            userLogged.password = null;

            return res.json(userLogged);
        });
    })(req, res, next);
};

const logoutPost = (req, res, next) => {
    if (req.user) {
        req.logout();

        req.session.destroy(() => {
            res.clearCookie("connect.sid");

            return  res.status(200).json({ message: 'Logout succesfull' })
        });
    } else {
        return res.status(401).json({ message: 'Unexpected error' });
    }
};



// // module.exports = { registerUser, loginUser, registerPost };
module.exports = { registerPost, loginPost, logoutPost, checkSession};
