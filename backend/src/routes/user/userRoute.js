const express = require('express');
const userRouter = express.Router();
const userController= require('../../controllers/userController')

// GET ALL USERs
userRouter.get('/getAllUser',userController.getAllUser)

// CREATE USER
userRouter.post('/createUser',userController.createUser)

//FIND  USER BY NAME
userRouter.get('/findUser/:name',userController.searchNameUser)

//FIND USER BY ID
userRouter.get('/findUser/:id',userController.searchIdUser)


//DELETE USER
userRouter.delete('/deleteUser/:id',userController.deleteUser)


module.exports = userRouter;