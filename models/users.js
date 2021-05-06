var mongoose = require('mongoose')
var Schema = mongoose.Schema

var User = new Schema({"username": String, "password": String, "userId": String})

module.exports = mongoose.model('users', users)
