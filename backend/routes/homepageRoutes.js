const express = require('express');
const homeRouter = express.Router();

const { goHome } = require('../controllers/homeController');

homeRouter.get('/', goHome);
module.exports = homeRouter;
