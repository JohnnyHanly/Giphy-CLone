var express = require('express');
var router = express.Router();


const {getTrending}= require('./../controllers/giphy-controller');

router.get('/trending',getTrending)
router.get('/search',getSearch)

module.exports = router;