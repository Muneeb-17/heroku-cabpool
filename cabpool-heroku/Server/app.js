const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(require('./router/auth'));
dotenv.config({path:'./config.env'});
require('./DB/conn');
const cookieParser = require('cookie-parser');
app.use(cookieParser());
const PORT = process.env.PORT || 5000;
app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );
  app.use(bodyParser.json());
app.use("/images", express.static("./images"));

if(process.env.NODE_ENV == "production"){
app.use(express.static("client/build"));
}

app.listen(PORT, () =>{
    console.log(`Server is Running at ${PORT}` ); 
});



 