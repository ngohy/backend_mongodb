const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()


const roomRoute = require('./src/routes/bookingRoom/roomRoute');
const userRouter = require('./src/routes/user/userRoute');
const commentRouter= require('./src/routes/comments/commentRoute')

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
mongoose.connect((process.env.MONGOOSE_URL),()=>{
  console.log("connecting...");
});


//ROUTES

//ROOM
app.use('/api/room', roomRoute);

//USER
 app.use("/api/user",userRouter);

//COMMENT
app.use("/api/comment",commentRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

