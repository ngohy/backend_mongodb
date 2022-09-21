const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

const app = express()
// const connectDB = require('./src/configs/dbConfig');

const roomRoute = require('./src/routes/room/roomRoute');
const userRouter = require('./src/routes/user/userRoute');
const commentRouter = require('./src/routes/comments/commentRoute');
const adminRouter = require('./src/routes/userAdmin/userAdminRouter');

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
// connectDB();
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
connectDB();


//ROUTES
//ROOM
app.use('/api/room', roomRoute);

//USER
app.use("/api/user", userRouter);
//USER ADMIN

app.use("/api/admin", adminRouter);

//COMMENT
app.use("/api/comment", commentRouter);


app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

