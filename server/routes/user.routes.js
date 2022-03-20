const express = require('express');
const User = require('../models/user');
const router = express.Router();

const { registerUser, loginUser } = require('../controllers/userController');
// const { registerUser, loginUser, getMe } = require('../controllers/userController');
// const { protect } = require('../middlewares/auth.middleware'); // Falta determinar creacion de carpeta o uso de una existente para el archivo

router.get('/', async (req, res, next) => {
    return User.find().then((users) => {
        return res.status(200).json(users);
    });
});

router.post('/registro', registerUser);
router.post('/login', loginUser);
// router.get('/me', protect, getMe);

module.exports = router;
