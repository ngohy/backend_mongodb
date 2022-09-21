const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    bedRoom: { type: Number },
    bed: { type: Number },
    price: { type: Number, required: true },
    description: { type: String },
    image: { type: String, required: true },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    comments: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment"
    },
    location:{
         type: mongoose.Schema.Types.ObjectId,
         ref:'Location'
    }
})

let Room = mongoose.model('Room', roomSchema);

module.exports = { Room };


