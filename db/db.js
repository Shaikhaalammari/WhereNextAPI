const { Sequelize } = require("sequelize");

const db = new Sequelize({
  username: "postgres",
  password: "shaikha19",
  database: "wherenext",
  dialect: "postgres",
  host: "localhost",

  logging: false,
});

module.exports = db;
