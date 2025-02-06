const express = require('express');
const session = require('express-session');
const app = express();
const path = require('path');
const db = require('./src/database/database'); // Importar el módulo de la base de datos
const authRouter = require('./src/routes/auth');
const bcrypt = require('bcrypt');

// Configurar sesión
app.use(session({
    secret: 'supersecret', // Clave secreta para firmar la sesión
    resave: false,  
    saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Configuración de archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos desde la carpeta 'public'

// Configurar EJS como motor de plantillas y establecer la ubicación de las vistas
app.set('views', path.join(__dirname, 'src', 'views')); // Establecer la ubicación de las vistas
app.set('view engine', 'ejs'); // Establecer el motor de plantillas como EJS

// Ruta para manejar el registro de usuarios
app.post('/register', (req, res) => {
    const { nombre, email, password } = req.body;

    // Verificar si el usuario ya existe en la base de datos
    db.getUserByEmail(email, (err, user) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error interno del servidor');
        }

        if (user) {
            return res.status(400).send('El correo electrónico ya está en uso.');
        }

        // Hashear la contraseña antes de almacenarla en la base de datos
        bcrypt.hash(password, 10, (err, hashedPassword) => {
            if (err) {
                console.error(err);
                return res.status(500).send('Error interno del servidor');
            }

            // Registrar el nuevo usuario en la base de datos con la contraseña hasheada
            db.registerUser(nombre, email, hashedPassword, 'usuario', (err) => {
                if (err) {
                    console.error(err);
                    return res.status(500).send('Error interno del servidor');
                }

                // Usuario registrado correctamente
                res.redirect('/perfil');
            });
        });
    });
});

// Ruta para mostrar el formulario de registro
app.get('/register', (req, res) => {
    // Verificar si el usuario está autenticado
    if (req.session.user) {
        // Si el usuario está autenticado, redirigirlo a su perfil
        res.redirect('/perfil');
    } else {
        // Si el usuario no está autenticado, renderizar la vista de registro
        res.render('register');
    }
});

// Ruta para mostrar el formulario de inicio de sesión
app.get('/login', (req, res) => {
    // Renderizar la vista de inicio de sesión
    res.render('login');
});

// Ruta predeterminada para renderización
app.get('/', (req, res) => {
    res.render('index', { content: 'Contenido específico de la página de inicio' }); // Renderizar la vista 'index.ejs' con el contenido
});

// Ruta para mostrar el perfil del usuario
app.get('/perfil', (req, res) => {
    // Verificar si el usuario está autenticado
    if (req.session.user) {
        // Si el usuario está autenticado, renderizar la vista de perfil
        res.render('perfil', { user: req.session.user });
    } else {
        // Si el usuario no está autenticado, redirigirlo al formulario de inicio de sesión
        res.redirect('/login');
    }
});

// Middleware de logging
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use('/auth', authRouter);

// Iniciar el servidor en el puerto 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`);
});
