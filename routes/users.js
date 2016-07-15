var express = require('express');
var router = express.Router();
var userController = require("./../controller/users/users.js");

/* GET users listing. */
router.get('/', userController.index);
router.get('/buscar/:id', userController.buscar);
router.get('/novo', userController.novo);
router.post('/salvar', userController.salvar);
router.get('/deletar/:id', userController.deletar);


module.exports = router;
