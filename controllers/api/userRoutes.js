//import express router
const router = require("express").Router();

//import user table
const { User } = require("../../models");

//router for new user creation
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

//router for user login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(400).json({ message: "User not found!" });
    }

    const validPw = user.checkPassword(req.body.password);

    if (!validPw) {
      res.status(400).json({ message: "User not found!" });
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      res.json(user);
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

//router for when user logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    //destroy the current session
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(404).end();
  }
});

//exports router to be used in other file
module.exports = router;
