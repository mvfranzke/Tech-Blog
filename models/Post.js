//bring in model and datatypes from sequelize to create our table
const { Model, DataTypes } = require("sequelize");

//bring in database connection from index.js inside config folder
const sequelize = require("../config");

// is defining a JavaScript class named Post that extends the Model class provided by Sequelize.
//By extending the Model class, you create a custom model class Post that represents a specific table in your database.
//This class inherits all the functionality and methods provided by the Model class, allowing you to perform CRUD (Create, Read, Update, Delete) operations on the associated database table.
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

module.exports = Post;
