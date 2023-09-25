require("dotenv").config();
const express = require("express"); // common js
const path = require("path"); //common js
const configViewEngine = require("./config/viewEngine");
const connection = require("./config/database")
// import express from 'express'; //es modules
// console.log(">>>check env: ",process.env)
const webRoutes = require("./routes/web");
const app = express(); // app express
const port = process.env.PORT || 8888; //port => hardcode
const hostname = process.env.HOST_NAME;


//config template engine
configViewEngine(app);

//khai báo route
app.use("/", webRoutes);
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//test connection

