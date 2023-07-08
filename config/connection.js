//import sequelize to handle our database in mysql
const Sequelize = require("sequelize");

//set up for the sequelize so it knows our mysql password, user and database we created
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql', 
    port: 3306
  }
)


//export it so it can be used in other file
module.exports = sequelize