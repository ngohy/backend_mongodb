const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    _id: { type: Number },
    name: { type: String },
    address: { type: String },
    bedRoom: { type: Number },
    bed: { type: Number },
    price: { type: Number },
    description: { type: String },
    image: { type: String },
    // users: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Users"
    // },

}, {
    collection: "rooms"
})

let Room = mongoose.model('Room', roomSchema);

module.exports = { Room };


