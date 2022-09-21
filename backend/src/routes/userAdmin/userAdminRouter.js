const adminRouter = require('express').Router()
const AdminController = require('../../controllers/userAdminController');
const verifyToken = require('../../middleware/Auth');

//CREATE ADMIN
adminRouter.post('/create', AdminController.createUser)
//LOGIN ADMIN 
adminRouter.post('/login', verifyToken, AdminController.login)
// GET ALL USERs
adminRouter.get('/getAllUser', verifyToken, AdminController.getAllUser)

//FIND  USER BY NAME
adminRouter.get('/findUserByName/:name', verifyToken, AdminController.searchNameUser)

// //FIND USER BY ID
adminRouter.get('/findUser/:id', verifyToken, AdminController.searchIdUser)


// //DELETE USER
adminRouter.delete('/deleteUser/:id', verifyToken, AdminController.deleteUser)

// //UPDATE User  by id


module.exports = adminRouter;