//import express router
const router = require("express").Router();
//import tables
const { User, Post } = require("../models");
//import withAuth from utlis folder
const withAuth = require("../utils/auth");


//display all post and render homepage
router.get("/", withAuth, async (req, res) => {
try {
  const postData = await Post.findAll({ include: [User] });

  //serialize the data
  const posts = postData.map((post) => post.get({ plain: true }));

  res.render("homepage", { posts });
} catch (err) {
  res.status(500).json(err);
}

});


//view the post made by specific user
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


//handles user session
router.get("/auth", async (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("auth");
});



module.exports = router;