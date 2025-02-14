const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Ruta para cambiar el rol de un usuario por su correo electrónico
router.put('/change-role/:email', UserController.changeUserRoleByEmail);

// Ruta para obtener el perfil de un usuario por su correo electrónico
router.get('/profile/email/:email', UserController.getUserProfileByEmail);

module.exports = router;

