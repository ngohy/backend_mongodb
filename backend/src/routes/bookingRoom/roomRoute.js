
const router = require('express').Router();

const { Router } = require('express');
const roomController = require('../../controllers/roomController');


//ADD ROOM

router.post("/addRoom", roomController.addRoom)

//GET ALL ROOMS

router.get("/getAllRooms", roomController.getAllRooms)

// DELETE ROOM

router.delete("/deleteRoom/:id", roomController.deleteRoom)

//FIND ROOM

router.get("/findRoom/:id", roomController.findRoom)


module.exports = router;