// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next) {
// res.render('index', { title: 'Express' });
// });

// module.exports = router;

var express = require('express');
var GoodList = require('../models/goods')
var router = express.Router();

router.get('/', function (req, res) {
    res.send('商品中心')
})

router.get('/goodList', function (req, res) {
    GoodList.find({}, function (err, doc) {
        if (err) {
            res.json({status: '1', msg: err.msg})
        } else {
            res.json({status: '0', msg: '', data: doc})
        }
    })
})
module.exports = router;
