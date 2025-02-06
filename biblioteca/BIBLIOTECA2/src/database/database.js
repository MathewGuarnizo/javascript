const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('biblioteca.db');

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS Libros (
        id INTEGER PRIMARY KEY,
        titulo TEXT NOT NULL,
        autor_id INTEGER NOT NULL,
        categoria_id INTEGER NOT NULL,
        resumen TEXT,
        imagen TEXT,
        fecha_publicacion TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Autores (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        biografia TEXT
        )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Categorias (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL
        )
    `);

    db.run(`
    CREATE TABLE IF NOT EXISTS Usuarios (
        id INTEGER PRIMARY KEY,
        nombre TEXT NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL,
        rol TEXT NOT NULL DEFAULT 'usuario'
    )
    `);

    db.run(`
        CREATE TABLE IF NOT EXISTS Prestamos (
        id INTEGER PRIMARY KEY,
        usuario_id INTEGER NOT NULL,
        libro_id INTEGER NOT NULL,
        fecha_prestamo TEXT NOT NULL,
        fecha_devolucion TEXT
        )
    `);
});

// Función para registrar un usuario
exports.registerUser = (nombre, email, password, rol, callback) => {
    db.run('INSERT INTO Usuarios (nombre, email, password, rol) VALUES (?, ?, ?, ?)', [nombre, email, password, rol], callback);
};

    // Función para buscar un usuario por email
    exports.getUserByEmail = (email, callback) => {
        db.get('SELECT * FROM Usuarios WHERE email = ?', [email], callback);
    };