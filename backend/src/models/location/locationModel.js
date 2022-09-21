
const mongoose = require('mongoose');


const locationSchema = new mongoose.Schema({
    location: { type: String, required: true },
    provinces: { type: String, required: true },
    national: { type: String, required: true },
    image: { type: String, required: true },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }
})


let Location = mongoose.model('Location', locationSchema);
module.exports = { Location }