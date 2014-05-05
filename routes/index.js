var express = require('express');
var router = express.Router();
var controller = require('../controller/coridor')
/* GET home page. */
router.get('/',controller.getListKoridor);
router.get('/halte',controller.autoComplete);
module.exports = router;
