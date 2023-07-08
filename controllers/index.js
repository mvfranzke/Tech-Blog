//this is where we set up connection of controllers->API and controller->viewRoutes

//declare a router using requiring of express and running the router method
const router = require("express").Router();

//bring in the API routes from API folder
const apiRoutes = require("./api");
//bring in viewRoutes from the viewRoutes file
const viewRoutes = require("./viewRoutes");

//we're going to tell the router that if there's no prefix, we will send it to the viewRoutes
router.use("/", viewRoutes);

//if there's a prefix api, we will send it to API routes
router.use("/api", apiRoutes);

//we export out the routers
module.exports = router;
