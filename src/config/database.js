const { Sequelize } = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.NODE_ENV === "test") {
  sequelize = new Sequelize({
    dialect: process.env.TEST_DB_DIALECT || "sqlite",
    storage: process.env.TEST_DB_STORAGE || ":memory:",
    logging: false, // disable SQL logs during tests
  });
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_DIALECT,
      port: process.env.DB_PORT,
      logging: false,
    }
  );
}

module.exports = sequelize;
