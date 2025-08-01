const express = require('express');
const routers = express.Router();

const { addUser } = require('../controllers/userControllers');

// router.post('/registre', registreaddUser);

routers.post('/', addUser);
  // res.send('Liste des utilisateurs');



module.exports = routers;