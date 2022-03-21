const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require("bcrypt");
const User = require('../models/user');


const saltRound = 10;
/**
 * Añadir en sus respectivos directorios
 */
passport.serializeUser((user, done) => {
    return done(null, user._id);
});

passport.deserializeUser(async (userId, done) => {
    try {
        const existingUser = await User.findById(userId);
        return done(null, existingUser);
    } catch (err) {
        return done(err);
    }
});


passport.use(
    'register', //Nombre de la estrategia
    new LocalStrategy(
        {
            usernameField: "email",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, email, password, done) => {
            try {
                // if (email.length < 6) {
                //     const error = new Error("Email must be 6 characters min");
                //     return done(error);                    
                // }

                // const validEmail = validate(email);

                // if (!validEmail) {
                //     const error = new Error("Invalid Email");
                //     return done(error);
                // }

                const previousUser = await User.findOne(
                    {
                        email: email
                    }
                );

                if (previousUser) {
                    const error = new Error("The user already exists");
                    return done(error);
                }

                const hash = await bcrypt.hash(password, saltRound);
                console.log('REQ.BODY', req.body);
                const newUser = new User({
                    email: email.toLowerCase(),
                    username: req.body.username,
                    password: hash,
                    
                });


                const savedUser = await newUser.save()

                return done(null, savedUser);

            } catch (err) {
                console.log('Error catch');
                return done(err);
            }
        }
    )
);