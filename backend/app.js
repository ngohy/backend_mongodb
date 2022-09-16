const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()


const roomRoute = require('./src/routes/bookingRoom/roomRoute')

dotenv.config();
const port = process.env.PORT || 5000;

//HTTP logger
app.use(morgan('common'));

//SET up cho project
app.use(cors())
app.use(bodyParser.json({
  limit: "50mb",
  extended: true,
  parameters: 50000
}));


//CONNECT DB mongoose connect(url_Mongoose,callback)
mongoose.connect((process.env.MONGOOSE_URL), { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});


//ROUTES

//ROOM
app.use('/api', roomRoute);
//USER


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

