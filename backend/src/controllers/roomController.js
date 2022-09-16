const { Room } = require('../models/Room/roomModel');

const roomController = {
   addRoom: async (req, res, next) => {
      try {
         const newRoom = new Room(req.body);
         const saveRoom = await newRoom.save();
         res.status(200).json(saveRoom);
      } catch (err) {
         res.status(500).json(err)
      }
      next();
   },
   getAllRooms: async (req, res, next) => {
      try {
         const allRooms = await Room.find();
         res.status(200).json(allRooms);
      } catch (err) {
         res.status(500).json(err)
      }
      next();
   },
   deleteRoom: async (req, res, next) => {
      try {
         const idRoom = req.params.id
         await Room.findByIdAndDelete(idRoom);
         res.status(200).json("delete successfully");

      } catch (err) {
         res.status(500).json(err)
      }
      next();
   },
   findRoom: async (req, res, next) => {
      try {
         const idRoom = req.params.id
         const room = await Room.findById(idRoom);
         res.status(200).json(room);

      } catch (err) {
         res.status(500).json(err)
      }
      next();
   }
}


module.exports = roomController;

