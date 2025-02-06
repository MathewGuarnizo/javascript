const express = require('express');
const router = express.Router();
const libroController = require('../controllers/libro_controllers');
const reservaController = require('../controllers/reserva_controllers');

// Ruta para crear un nuevo libro
router.post('/', libroController.createBook);

// Ruta para actualizar un libro
router.put('/:id', libroController.updateBook);

// Ruta para eliminar un libro
router.delete('/:id', libroController.deleteBook);

// Ruta para verificar disponibilidad de un libro
router.get('/:id/check-availability', reservaController.checkBookAvailability);

module.exports = router;