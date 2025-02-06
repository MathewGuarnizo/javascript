const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('biblioteca.db');

// Obtener todos los libros
exports.getBooks = (req, res) => {
    // Consultar la base de datos para obtener todos los libros
    db.all('SELECT * FROM Libros', (err, rows) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al obtener los libros');
        }
        res.json(rows);
    });
};

// Obtener un libro por su ID
exports.getBookById = (req, res) => {
    // Consultar la base de datos para obtener un libro por su ID
    db.get('SELECT * FROM Libros WHERE id = ?', [req.params.id], (err, row) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al obtener el libro');
        }
        if (!row) {
            return res.status(404).send('Libro no encontrado');
        }
        res.json(row);
    });
};

// Crear un nuevo libro
exports.createBook = (req, res) => {
    const { titulo, autor_id, categoria_id, resumen, imagen, fecha_publicacion } = req.body;
    // Insertar un nuevo libro en la base de datos
    db.run('INSERT INTO Libros (titulo, autor_id, categoria_id, resumen, imagen, fecha_publicacion) VALUES (?, ?, ?, ?, ?, ?)', [titulo, autor_id, categoria_id, resumen, imagen, fecha_publicacion], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al crear el libro');
        }
        res.status(201).send('Libro creado exitosamente');
    });
};

// Actualizar un libro existente
exports.updateBook = (req, res) => {
    const { titulo, autor_id, categoria_id, resumen, imagen, fecha_publicacion } = req.body;
    // Actualizar un libro en la base de datos según su ID
    db.run('UPDATE Libros SET titulo = ?, autor_id = ?, categoria_id = ?, resumen = ?, imagen = ?, fecha_publicacion = ? WHERE id = ?', [titulo, autor_id, categoria_id, resumen, imagen, fecha_publicacion, req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al actualizar el libro');
        }
        res.status(200).send('Libro actualizado exitosamente');
    });
};

// Eliminar un libro por su ID
exports.deleteBook = (req, res) => {
    // Eliminar un libro de la base de datos según su ID
    db.run('DELETE FROM Libros WHERE id = ?', [req.params.id], (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error al eliminar el libro');
        }
        res.status(200).send('Libro eliminado exitosamente');
    });
};
