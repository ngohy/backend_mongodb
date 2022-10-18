const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const cors = require('cors');
const bodyParser = require('body-parser')


const app = express()


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

app.use(bodyParser.urlencoded({ extended: true }));


//ROUTES
//ROOM
// app.use('/api/room', roomRoute);

// //USER
// app.use("/api/user", userRouter);
// //USER ADMIN

// app.use("/api/admin", adminRouter);

// //COMMENT
// app.use("/api/comment", commentRouter);

//CONNECT MYSQL

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

