//import the model(table) and datatypes(content types) property from sequelize, so we can create the table
const { Model, DataTypes } = require("sequelize");

//import bcrypt to hash password
const bcrypt = require('bcrypt')

//import our database connection by grabbing the config folder, this is where we set up mysql password, user name and secret
const sequelize = require('../config')

