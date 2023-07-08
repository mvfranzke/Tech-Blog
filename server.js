//import express package
const express = require('express')

//declare app variable as express()
const app = express()

//setting up port 3001 or env.PORT for running in HEROKU later
const port = process.env.PORT || 3001;

//set server to listen to port 3001 or log error
sequelize
  .sync({ force: false })
  .then(() => app.listen (port))
  .catch((err) => console.error(err));