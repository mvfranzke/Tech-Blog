//bring in our router
const router = require("express").Router();

//import both files userRoutes and postRouts, we're connecting
const userRoutes = require("./userRoutes");
const postRoutes = require("./postRoutes");

//were going to tell the router to use if it got /users in it, send it to userRoutes
router.use("/users", userRoutes);

//were going to tell the router to use if it got /post in it, send it to postRoutes
router.use("/posts", postRoutes);

//exports the router
module.exports = router;
