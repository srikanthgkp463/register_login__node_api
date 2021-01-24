const express = require('express');
const router = express.Router();
const userController = require('../app/api/controllers/users');
router.get('/register', userController.registeruser);
router.get('/login', userController.login);
module.exports = router;