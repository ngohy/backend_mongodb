const mongoose = require('mongoose')

// const User = require('../../models/Users/usersModel');
// const Room = require('../../models/Room/roomModel');

const commentSchema = new mongoose.Schema({
    dataComment: { type: String },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Room"
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }
})
// commentSchema.path('Room') instanceof mongoose.SchemaType;
// commentSchema.path('User') instanceof mongoose.SchemaType;

let Comment = mongoose.model('Comment', commentSchema)
module.exports = { Comment };