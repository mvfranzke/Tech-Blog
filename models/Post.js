//bring in model and datatypes from sequelize to create our table
const { Model, DataTypes } = require("sequelize");

//bring in database connection from index.js inside config folder
const sequelize = require("../config");

//set class post to extends model properties
class Post extends Model {}

//initialize the column inside the post table
Post.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    body: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    //pass in our sequelize connection
    sequelize,
    //we don't want timestamp to show everytime
    timestamps: false,
    freezeTableName: true,
    //name of our table
    modelName: "post",
  }
);

//export post to be used in other file
module.exports = Post;
