// auth.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth_controllers');

// Ruta de registro
router.post('/register', authController.register);

// Ruta de inicio de sesión
router.post('/login', authController.login); // Aquí estaba el error

module.exports = router;
