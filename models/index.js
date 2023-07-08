//import our tables we created
const User = require("./User");
const Post = require("./Post");

//sets up connection between post and user table
Post.belongsTo(User, {
  foreignKey: "userId",
  //it will delete all post that belong to the user
  onDelete: "CASCADE",
});


//export out our models
module.exports = { User, Post }