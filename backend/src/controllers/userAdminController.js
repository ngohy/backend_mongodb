const { User } = require("../models/Users/usersModel");
const jwt = require('jsonwebtoken')

const AdminController = {
    createUser: async (req, res, next) => {
        const { email, password } = req.body
        // Simple validation
        if (!email || !password)
            return res.status(400).json({ success: false, message: 'Missing email and/or password' })

        try {
            // Check for existing user
            const user = await User.findOne({ email })
            let userAdmin = {}
            if (user) {
                return res.status(400).json({ success: false, message: 'email already taken' })
            }
            else {
                userAdmin = {
                    ...req.body,
                    role: 'admin'
                }
            }
            // All good
            // const hashedPassword = await argon2.hash(password)


            const newUser = new User(userAdmin)
            await newUser.save()

            // Return token
            const accessToken = jwt.sign(
                { userId: newUser._id },
                process.env.ACCESS_TOKEN_SECRET
            )

            res.json({
                success: true,
                message: 'User created successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },
    login: async (req, res, next) => {
        const { password, email } = req.body

        // Simple validation
        if (!password || !email)
            return res.status(400).json({ success: false, message: 'Missing password and/or email' });

        try {
            // Check for existing user
            const user = await User.findOne({ email })
            if (!user)
                return res.status(400).json({ success: false, message: 'Incorrect email or password' })

            // Username found
            // const passwordValid = await argon2.verify(user.password, password)
            if (!password)
                return res.status(400).json({ success: false, message: 'Incorrect email or password' })

            // All good
            // Return token
            const accessToken = jwt.sign(
                { userId: user._id },
                process.env.ACCESS_TOKEN_SECRET
            )
            res.json({
                success: true,
                user,
                message: 'User logged in successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },
    getAllUser: async (req, res, next) => {
        // console.log('get_all');
        try {
            let allUser = await User.find();
            // console.log(allUser);
            return res.status(200).json(allUser);
        } catch (err) {
            res.status(500).json(err);
        }
        // next();
    },
    searchNameUser: async (req, res, next) => {
        try {
            var name = req.params.name
            // console.log(name);// lấy giá trị của key name trong query parameters gửi lên
            let user = await User.find({ name })
            if (user) return res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
        next();
    },
    searchIdUser: async (req, res, next) => {
        try {
            let id_User = req.params.id;
            let user = await User.findById(id_User)
            // .populate('comment')
            // .exec(function (err, story) {
            //     if (err) return handleError(err);
            //     console.log(story);
            // });
            if (user) return res.status(200).json(user);
        } catch (err) {
            res.status(500).json(err);
        }
        // next();
    },
    updateUser: async (req, res, next) => {
        try {
            let id_user = req.params.id;
            // let updateUser = {
            //     ...req.body,
            //     name: req.body.name,
            //     gender: req.body.gender,
            //     phone: req.body.phone,
            //     email: req.body.email,

            // };

            let updateUser = await User.findOneAndUpdate(
                id_user,
                req.body
            )
            if (updateUser) return res.status(200).json('update Success');

        } catch (err) {
            res.status(500).json(`update error ${err}`);
        }
        // next();
    },
    deleteUser: async (req, res, next) => {
        try {
            let deleUser = await User.findByIdAndDelete(req.params.id);
            if (deleUser) return res.status(200).json("delete successfully")
        } catch (err) {
            res.status(500).json(`delete error ${err}`);
        }
        // next();
    }
}

module.exports = AdminController;