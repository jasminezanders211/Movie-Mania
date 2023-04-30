const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const PORT = 4040;
const app = express();

mongoose.connect(process.env.DATA_BASE);
const db = mongoose.connection;

// on error log the error
db.on("error", console.error.bind(console, "Connection Error:"));

//once successfully connected to database console log .... 
db.once("open", console.log.bind(console, "Successfully connected to database"))

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};


// calling .use and passing cors var
app.use(cors);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`));