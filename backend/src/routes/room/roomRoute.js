
const roomRouter = require('express').Router();

const roomController = require('../../controllers/roomController');
const verifyToken = require('../../middleware/Auth');


//ADD ROOM
roomRouter.post("/addRoom", verifyToken, roomController.addRoom)

//GET ALL ROOMS
roomRouter.get("/getAllRooms", roomController.getAllRooms)

// DELETE ROOM
roomRouter.delete("/deleteRoom/:id", verifyToken, roomController.deleteRoom)

//FIND ROOM BY ID
roomRouter.get("/findRoom/:id", roomController.findRoomById)

//FIND BY NAME ROOM
roomRouter.get("/findNameRoom/:name", roomController.searchByNameRoom)

//UPDATE ROOM
roomRouter.get("/updateRoom/:id", verifyToken, roomController.updateRoom)


module.exports = roomRouter;