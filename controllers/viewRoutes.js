//import express router, user and post table and withAuth file
const router = require("express").Router();
const { User, Post } = require("../models");
const withAuth = require("../utils/auth");

//router to generate and map all post of user in homepage
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

//router to locate specific post by id
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

//router to handle current session, if user is logged in and there's a session can view the post page, otherwise will be prompte to login/register page
router.get("/auth", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("auth");
});

//exports router to be used in other file
module.exports = router;
