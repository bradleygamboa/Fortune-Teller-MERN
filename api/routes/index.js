var express = require('express');
var router = express.Router();
var testsController = require('../controllers/tests.controller.js');
var bodyParser = require('body-parser');

router
.route('/api/tests')
.get(testsController.getTest)
.post(bodyParser.urlencoded({ extended: true }), testsController.postTest);


module.exports = router;
