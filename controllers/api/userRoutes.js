const router = require("express").Router();

//import user table
const { User } = require('../../models');


//registration, sets up new user and password
router.post("/", async (req, res) => {
try {
  const newUser = await User.create({
    username: req.body.username,
    password: req.body.password,
  });

  req.session.save(() => {
    req.session.userId = newUser.id;
    req.session.username = newUser.username;
    req.session.loggedIn = true;

    res.json(newUser);
  });
} catch (err) {
  res.status(500).json(err);
}
});

//logins a user
router.post("/login", async (req, res) => {});




//logs out a user
router.post("/logout", async (req, res) => {});




//export router to be used in other file
module.exports = router;