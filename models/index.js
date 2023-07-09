
//call the user and post.js
const User = require("./User");
const Post = require("./Post");

Post.belongsTo(User, {
  foreignKey: "userId",
  //it will delete all port that belong to the user
  onDelete: "CASCADE",
});

//this is the other side of it, alternative way of writing the code
User.hasMany(Post, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

//export out our models
module.exports = { User, Post };
