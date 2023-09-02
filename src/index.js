const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/serverConfig");
const apiRoutes = require("./routes/index");
const db = require("./models/index");

const app = express();
const setupAndStartServer = () => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // app.get('/bookingservice/api/v1/home',(req,res)=>{
  //   return res.status(201).json({
  //     message:"Message send from Booking service"
  //   })
  // })

  app.use("/bookingservice/api", apiRoutes);

  app.listen(PORT, () => {
    console.log(`Server started at ${PORT}`);

    if (process.env.DB_SYNC==true) {
      db.sequelize.sync({ alter: true });
    }
  });
};

setupAndStartServer();
