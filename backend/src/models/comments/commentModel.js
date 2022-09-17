const mongoose = require('mongoose')

const commentSchema =new mongoose.Schema({
    dataComment: { type : String}
})

let Comment = mongoose.model('comment',commentSchema)
module.exports = {Comment};