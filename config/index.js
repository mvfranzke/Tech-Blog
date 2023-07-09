//import sequelize to handle our database in mysql
const Sequelize = require("sequelize");

//set up for sequelize to access database name, password and username
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(
      process.env.DB_NAME,
      process.env.DB_USER,
      process.env.DB_PASSWORD,
      {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
      }
    );


//export it so it can be used in other file
module.exports = sequelize;
