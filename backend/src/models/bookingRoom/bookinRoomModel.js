const mongoose = require('mongoose')

const bookingRoomSchema = new mongoose.Schema({
    arrivalDate: { type: String, required: true },
    leaveDate: { type: String, required: true },
    numberCustomer: { type: Number, required: true },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }
})


const BookingRoom = mongoose.Model('BookingRoom', bookingRoomSchema);

module.exports = { BookingRoom }