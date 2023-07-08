//bring in model and datatypes from sequelize to create our table
const { Model, DataTypes } = require("sequelize");

//bring in database connection from index.js inside config folder
const sequelize = require('../config')

//set class Post to extend model properties
class Post extends Model {}


//initialize the column inside the post table
Post.init({
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  body: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
