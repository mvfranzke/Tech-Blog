//import express router, post table and 
const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.session.userId });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.put("/:id", withAuth, async (req, res) => {});



router.delete("/:id", withAuth, async (req, res) => {});

















module.exports = router;
