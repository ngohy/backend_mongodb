const { User } = require('../models/users/usersModel');

const UserController = {
    createUser: async (req, res, next) => {
        try {
            const newUser = new User(req.body);
            const user = await newUser.save();
            res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    },
    getAllUser: async (req, res, next) => {
        try {
            let allUser = await User.find();
            res.status(200).json(allUser);
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    },
    searchNameUser: async (req, res, next) => {
        try {
            let name_user = request.params.name;       
            await User.find({'sentence' : new RegExp(name_user, 'i')}, function(err, name_users){
               if (err) {response.send(err);}
               response.status(200).json(name_users);
            });
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    },
    searchIdUser: async (req, res, next) => {
        try {
            let id_User = req.params.id;
            let User = await User.findById(id_User);
            res.status(200).json(User);
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    },
    deleteUser: async (req, res, next) => {
        try {
            let id_User = req.params.id;
            await User.findByIdAndDelete(id_User);
            res.status(200).json("delete successfully")
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    }
}

module.exports = UserController;