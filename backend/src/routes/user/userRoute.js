const express = require('express');
const userRouter = express.Router();
const userController= require('../../controllers/userController');
const verifyToken = require('../../middleware/Auth');

//VERIFY TOKEN
userRouter.get('/auth',verifyToken,userController.verifyTokenUser)

// CREATE (REGISTER) USER
userRouter.post('/registerUser',userController.createUser)

//LOGIN User
userRouter.post('/login',verifyToken,userController.loginUser)

userRouter.put('/updateUser/:id',verifyToken,userController.updateUser)


module.exports = userRouter;