const express = require('express');
const user_router = express.Router();
const userController= require('../../controllers/loginController')

// const useRouter= ()
user_router.get('/', )

user_router.get('/create',userController.createUser)

// user_router.get('/create', (req, res) => {
// 	res.render('users/create');
// })

// user_router.post('/create', (req, res) => {
// 	users.push(req.body);
// 	res.redirect('')
// })

// user_router.get('/:id', (req, res) => {
// 	console.log(req.params);
// 	var user = users.find( (user) => {
// 		return user.id == parseInt(req.params.id);
// 	});
// 	res.render('users/show', {
//     	user: user
//     })
// })

module.exports = user_router;