var express = require('express');
var router = express.Router();
var controller = require('../controller/coridor')

/* get method here */
router.get('/', controller.getListKoridor);
router.get('/db', controller.getListKoridorDB);
module.exports = router;