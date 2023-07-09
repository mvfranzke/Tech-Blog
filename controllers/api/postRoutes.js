//import router, post table and withAut file
const router = require("express").Router();
const { Post } = require("../../models");
const withAuth = require("../../utils/auth");

//router to create a new post
router.post("/", withAuth, async (req, res) => {
  try {
    const post = await Post.create({ ...req.body, userId: req.session.userId });
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//router to update post per id
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
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//router to delete post using post id
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
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//export router to be used in other file
module.exports = router;
