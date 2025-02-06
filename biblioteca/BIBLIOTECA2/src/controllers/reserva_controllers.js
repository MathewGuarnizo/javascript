const db = require('../database/database');

// Verificar si el libro está disponible para reservar
exports.checkBookAvailability = (req, res) => {
const { bookId } = req.query;

// Consultar la base de datos para verificar la disponibilidad del libro
db.get('SELECT * FROM Libros WHERE id =? AND disponible = 1', [bookId], (err, book) => {
    if (err) {
    console.error(err);
    return res.status(500).send('Error al verificar disponibilidad del libro');
    }
    if (!book) {
    return res.status(404).send('El libro no existe o no está disponible');
    }
    res.status(200).send('Libro disponible para reservar');
});
};

// Realizar la reserva en la base de datos
exports.reserveBook = (req, res) => {
const { userId, bookId } = req.body;

// Verificar si el libro está disponible para reservar
db.get('SELECT * FROM Libros WHERE id =? AND disponible = 1', [bookId], (err, book) => {
    if (err) {
    console.error(err);
    return res.status(500).send('Error al verificar disponibilidad del libro');
    }
    if (!book) {
    return res.status(404).send('El libro no existe o no está disponible');
    }

    // Realizar la reserva en la base de datos
    db.run('INSERT INTO Reservas (usuario_id, libro_id) VALUES (?, ?)', [userId, bookId], (err) => {
    if (err) {
        console.error(err);
        return res.status(500).send('Error al realizar la reserva');
    }
    res.status(200).send('Libro reservado exitosamente');
    });
});
};

// Obtener reservas de un usuario
exports.getUserReservations = (req, res) => {
const userId = req.params.userId;

// Consultar la base de datos para obtener las reservas del usuario
db.all('SELECT * FROM Reservas WHERE usuario_id = ?', [userId], (err, rows) => {
    if (err) {
    console.error(err);
    return res.status(500).send('Error al obtener las reservas del usuario');
    }
    res.json(rows);
});
};