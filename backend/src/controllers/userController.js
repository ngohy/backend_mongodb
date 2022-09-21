const { User } = require('../models/Users/usersModel');
const jwt = require('jsonwebtoken')

const UserController = {
    createUser: async (req, res, next) => {
        const { email, password } = req.body
        // Simple validation
        if (!email || !password)
            return res.status(400).json({ success: false, message: 'Missing email and/or password' })

        try {
            // Check for existing user
            const user = await User.findOne({ email })
            let normalUser = {}
            if (user) {
                return res.status(400).json({ success: false, message: 'email already taken' })
            }
            else {
                normalUser = {
                    ...req.body,
                    role: 'user'
                }
            }
            // All good
            // const hashedPassword = await argon2.hash(password)
            // console.log(convertUser);

            const newUser = new User(normalUser)
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
    loginUser: async (req, res, next) => {
        const { email, password } = req.body

        // Simple validation
        if (!email || !password)
            return res.status(400).json({ success: false, message: 'Missing email and/or password' })

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
            let resUser = {
                _id: user._id,
                name: user.name,
                username: user.username,
                phone: user.phone,
                gender: user.gender,
                email: user.email,
            }
            res.json({
                success: true,
                resUser,
                message: 'User logged in successfully',
                accessToken
            })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },
    verifyTokenUser: async (req, res, next) => {
        try {
            const user = await User.findById(req.userId).select('-password')
            const covertUser = {
                id: user._id,
                name: user.name,
                email: user.email,
                gender: user.gender,
                password: user.password,
            }
            if (!user)
                return res.status(400).json({ success: false, message: 'User not found' })
            res.json({ success: true, covertUser })
        } catch (error) {
            console.log(error)
            res.status(500).json({ success: false, message: 'Internal server error' })
        }
    },
    updateUser: async (req, res, next) => {
        try {
            let id_user = req.params.id;
            let updateUser = {
                ...req.body,
                name: req.body.name,
                gender: req.body.gender,
                phone: req.body.phone,
            };
            await User.findOneAndUpdate(
                id_user,
                updateUser
            )
            res.status(200).json('update Success');

        } catch (err) {
            res.status(500).json(`update error ${err}`);
        }
        // next();
    },
}

module.exports = UserController;