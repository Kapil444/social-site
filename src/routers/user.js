const express = require('express');
const router = express.Router();
const userController = require('../controller/UsersController')

router.post('/signup',userController.createUser);

router.get('/profile',userController.getById);

router.post("/login",userController.login);

module.exports = router;
