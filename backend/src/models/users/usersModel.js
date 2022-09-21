const mongoose = require('mongoose')

const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

const userSchema = new mongoose.Schema({
    name: { type: String },
    username: { type: String, required: true },
    password: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    gender: { type: Boolean },
    email: {
        type: String,
        required: true,
        unique: true,
        // validate: [validateEmail, 'Please fill a valid email address'],
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    role: { type: String },
    createdAt: {
        type: Date,
        default: Date.now
    },
    token: { type: String }
})

let User = mongoose.model('User', userSchema);

module.exports = { User };