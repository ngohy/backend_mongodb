const mongoose = require('mongoose')

const roomSchema = new mongoose.Schema({
    _id:{ 
        type: Number
    },
    address: {
        type: String
    },
    price: {
        type: Number
    },
    image: {
        type: String
    },
    
}, {
    collection: "rooms"
})

let Room = mongoose.model('Room', roomSchema);

module.exports = { Room };


