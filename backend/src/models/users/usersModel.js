const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    _id:{ type: Number},
    name: { type: String },
    gender: { type: Boolean },
    email: { type: String },
    password: { type: String },
    phone: { type: String },
    // role : { type: String },
    // room:{ 

    // // }
})

let User = mongoose.model('User', userSchema);

module.exports = {User};