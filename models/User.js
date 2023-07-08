//import the model(table) and datatypes(content types) property from sequelize, so we can create the table
const { Model, DataTypes } = require("sequelize");

//import bcrypt to hash password
const bcrypt = require('bcrypt')

//import our database connection by grabbing the config folder, this is where we set up mysql password, user name and secret
const sequelize = require('../config')

//set up class user to extend model properties
class User extends Model {
  //function to check and validate that we enter the valid password vs. the password stored
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}


//setting up out table, with the following fields - id, username and password
User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      //we're going to validate that what they type must be atleat 6 character
      validate: {
        len: [6],
      },
    },
  },
  //set up hooks for when a password gets created, it will be encrypted first before getting added on the databse
  {
    hooks: {
      beforeCreate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10);
        return data;
      },
    },
    sequelize, //database connection, provides method for interacting with the database
    freezeTableName: true, // keeps our modelName user vs. users
    timestamps: false, // disables automatic timestamp when table gets updated
    modelName: "user", // table name in database
  }
);

module.exports = User; // export class user to be used in other file