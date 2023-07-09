//we want dotenv configuration to be the first thing that ever happens on the app, we want to make sure we configure it before sequelize connects, before the session creates
require("dotenv").config();

//bring in express
const express = require("express");

//grab just the join methon of object destructuring off of the path package
const { join } = require("path");

//if we want this to fully function for user authentication, we're going to bring in session work, we;re bringin in session from express section
const session = require("express-session");

//last thing is we want to import our handlebars and create handle bar example below
const exphbs = require("express-handlebars");

//make express app
const app = express();

//connect index.js file inside the config folder, notice we didnt have to type down to index.js, whatever you export on the index of a folder becomes the entire export of the folder itself
const sequelize = require("./config");

//will connect the session to sequelize whenever the user login
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const port = process.env.PORT || 3001;

//bring in an object and tell our app to use session with object inside
//cookie properties
app.use(
  session({
    secret: process.env.SESSION_SECRET, 
    cookie: {
      maxAge: 24 * 60 * 60 * 1000,//24 hrs
      httpOnly: true,
      secure: false,
      sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    //implement session storage in sequelize
    store: new SequelizeStore({
      db: sequelize, // we pass down our database connection here
    }),
  })
);

//create express handle bar example
const hbs = exphbs.create({});

//then set up handlebars engine
app.engine("handlebars", hbs.engine);

//then set up view engin to handlebars
app.set("view engine", "handlebars");

//middleware
//express json data, will allow it to handle json data
app.use(express.json());
//good covering of bases via url encoded, extended to true
app.use(express.urlencoded({ extended: true }));
//use public folder for the static assets, piblic folder houses css and some java

//for css
app.use(express.static("public"));
//join together dirname and publick to give us our connection down
app.use(express.static(join(__dirname, "public")));

//after creating controller foler, tell the app to use exports inside controllers folder
app.use(require("./controllers"));

// Set server to listen on the specified port and log a message
app.listen(port, () => {
  console.log(`Listening on PORT: ${port}`);
});

// Sync sequelize and start listening on the same port
sequelize.sync({ force: false })
  .then(() => {
    console.log(`Sequelize synced successfully`);
  })
  .catch((err) => console.error(err));
