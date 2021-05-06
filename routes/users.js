var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.send('respond with a resource');
});

module.exports = router;

// var express = require('express');
// var User = require('../models/user')
// var router = express.Router();

// /* GET users listing. */
// router.post('/login', function (req, res) {
//     let param = {
//         username = req.body.username,
//         password = req.body.password
//     }
//     User.findOne(param, function (err, doc) {
//         if (doc) {
//             res.json({code: 0, msg: '登陆成功', data: doc})
//         } else {
//             res.json({code: 1, msg: '用户名或密码错误'})
//         }
//     })

// });


// module.exports = router;
