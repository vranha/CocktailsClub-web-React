const express = require('express');
const router = express.Router();

const { registerUser, loginUser, getMe } = require('../controllers/userController');
const { protect } = require('../middlewares/authMiddleware'); // Falta determinar creacion de carpeta o uso de una existente para el archivo

router.post('/', registerUser);
router.post('/login', loginUser);
router.get('/me', protect, getMe);

module.exports = router;
