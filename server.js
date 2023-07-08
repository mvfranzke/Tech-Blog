//import express package
const express = require('express')

//declare app variable as express()
const app = express()

//set server to listen to port 3001 or log error
sequelize
  .sync({ force: false })
  .then(() => app.listen(3001))
  .catch((err) => console.error(err));