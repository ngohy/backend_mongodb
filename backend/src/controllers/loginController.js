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
    },
    searchUser: async (req, res) => {
        var name_search = req.query.name // lấy giá trị của key name trong query parameters gửi lên
        var age_search = req.query.age // lấy giá trị của key age trong query parameters gửi lê
        // let result =
    }
}

module.exports = UserController;