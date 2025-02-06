// auth_controllers.js

// Importar los módulos necesarios
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('biblioteca.db');

// Función para manejar la solicitud de inicio de sesión
exports.login = (req, res) => {
  const { username, password } = req.body;

  // Buscar el usuario en la base de datos
  db.get('SELECT * FROM Usuarios WHERE username = ?', [username], (err, row) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Error al iniciar sesión');
    }

    if (!row) {
      return res.status(401).send('Credenciales inválidas');
    }

    // Comparar la contraseña hasheada
    bcrypt.compare(password, row.password, (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('Error al iniciar sesión');
      }

      if (!result) {
        return res.status(401).send('Credenciales inválidas');
      }

      // Generar y enviar el token de acceso
      const token = jwt.sign({ userId: row.id }, 'tu_clave_secreta', { expiresIn: '1h' });

      // Establecer la sesión
      req.session.user = row;

      // Redirigir al perfil del usuario
      res.redirect('/perfil');
    });
  });
};
