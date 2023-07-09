//import the model(table) and datatypes(content types) property from sequelize, so we can create the table
const { Model, DataTypes } = require("sequelize");

//import bcrypt to hash password
const bcrypt = require("bcrypt");

//import our database connection by grabbing the config folder, this is where we set up mysql password, user name and secret
const sequelize = require("../config");

//creates table called user
class User extends Model {
  //function to check and validate that what we enter the valid password vs. the password stored
  checkPassword(password) {
    return bcrypt.compareSync(password, this.password);
  }
}

//setting up out table now, with the following fields
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

  //we're going to set up our hooks, it's got its own curly bracket. It will encrypt password before it gets create and before it gets updated.
  {
    hooks: {
      beforeCreate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10);
        return data;
      },
      beforeUpdate: async (data) => {
        data.password = await bcrypt.hash(data.password, 10);
        return data;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: "user",
  }
);

module.exports = User;
