const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, async (req, res) => {
  try {
    const postData = await Post.findAll({ include: [User] });

    //this is how you serialize the data
    const posts = postData.map((post) => post.get({ plain: true }));

    res.render("homepage", { posts });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/post/:id", withAuth, async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, { include: [User] });

    if (!postData) {
      res.status(404).end();
    }

    const post = postData.get({ plain: true });

    res.render("post", post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/auth", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("auth");
});

module.exports = router;
