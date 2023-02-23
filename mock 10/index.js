const express = require("express");

require("dotenv").config();
const { connect } = require("./config/db");
const {userRouter}=require("./controller/userRouter")
const { flightRouter }=require("./controller/flightRouter")

const app = express();
app.use("/user", userRouter);
app.use("/flight", flightRouter);

app.listen(process.env.port, async () => {
  try {
    await connect;
    console.log(`server started on port ${process.env.port}`);
  } catch (err) {
    console.log(`err while starting the port on ${process.env.port}`);
  }
});



// "id": "1",
// "airline": "Indigo",
// "flightNo": "002211",
// "departure": "23-02-2022",
// "arrival": "23-02-2022",
// "departureTime": "6:00 am",
// "arrivalTime":"10:00 am",
// "seats": 2,
// "price": 7080