const express = require('express');
const reservaController = require('../controllers/reserva_controllers');

const router = express.Router();

// Verificar disponibilidad de un libro
router.get('/check-availability', reservaController.checkBookAvailability);

// Realizar reserva de un libro
router.post('/reserve', reservaController.reserveBook);

// Obtener reservas de un usuario
router.get('/reservations/:userId', reservaController.getUserReservations);

module.exports = router;