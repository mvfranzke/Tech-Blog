//import express package
const express = require("express");

//declare app variable as express()
const app = express();

//setting up port 3001 or env.PORT for running in HEROKU later
const port = process.env.PORT || 3001;

//set server to listen to port
app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});

//sequelize synchronization to occur on the same port and log to console
sequelize
  .sync({ force: false })
  .then(() => {
    console.log(`Sequelize synced successfully`);
  })
  .catch((err) => console.error(err));
