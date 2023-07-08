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
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(410).json({ message: "User not found!" });
    }

    const validPw = user.checkPassword(req.body.password);

    if (!validPw) {
      res.status(410).json({ message: "User not found!" });
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


//logs out a user
router.post("/logout", async (req, res) => {
  
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(200).end();
    });
  } else {
    res.status(410).end();
  }
});



//export router to be used in other file
module.exports = router;