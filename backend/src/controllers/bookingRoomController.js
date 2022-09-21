const { BookingRoom } = require("../models/bookingRoom/bookinRoomModel");


const bookingRoomController = {
    bookingRoom: async (req, res, next) => {
        try {
            // let bookingRoom = await BookingRoom.find({})
            const bookingRoom = new BookingRoom(req.body);
            await bookingRoom.save();
            res.status(200).json(bookingRoom)
        } catch (err) {
            res.status(500).json({ success: false, message: `${err}` })
        }
    },
}


module.exports = bookingRoomController;