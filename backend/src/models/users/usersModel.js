const mongoose = require('mongoose')
// const uuid = require('uuid');
const userSchema = new mongoose.Schema({
    // id:uuid(),
    name: { type: String },
    sex: { type: Boolean },
    email: { type: String },
    password: { type: String },
    date: { type: Date },
    // room:{ 

    // }
})

let User = mongoose.model('User', userSchema);

module.exports = User;