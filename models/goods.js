var mongoose = require('mongoose')
var Schema = mongoose.Schema

var goodList = new Schema({
    "title": String,
    "description": String,
    "url": String,
    "tags": Array,
    "likes": Number,
    "by_user": String
})

module.exports = mongoose.model('goods', goodList)
