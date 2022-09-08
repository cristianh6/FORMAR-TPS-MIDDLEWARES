const express = require('express');
const router = express.Router();
const logMiddleware = require('../middlewares/userLogs');
const adminCheck = require('../middlewares/adminCheck')

const { index, adminHome } = require('../controllers/mainController');


/* GET home page. */
router
        .get('/', logMiddleware, index)
        .get('/admin?', logMiddleware, adminCheck, adminHome)

module.exports = router;

