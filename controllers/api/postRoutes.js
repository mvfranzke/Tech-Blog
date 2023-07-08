//import express router, post table and withAuth file in utils
const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//add post on the application
router.post("/", withAuth, async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.session.userId });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//edit post on the application
router.put("/:id", withAuth, async (req, res) => {
  try {
  const [affectedRows] = await Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  });

  if (affectedRows > 0) {
    res.status(200).end();
  } else {
    res.status(410).end();
  }
} catch (err) {
  res.status(500).json(err);
}});


//delete post on the application
router.delete("/:id", withAuth, async (req, res) => {
  try {
    const [affectedRows] = await Post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } else {
      res.status(410).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


//export router to be used in other file
module.exports = router;
