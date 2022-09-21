const mongoose = require('mongoose')
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
        const URL = process.env.MONGOOSE_URL
        await mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("connect to mongooseDB...");
    } catch (err) {
        console.log(`error ${err}`)
        process.exit(1);
    }

}


module.exports = connectDB;