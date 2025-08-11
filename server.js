const express = require("express");
const sequelize = require("./src/config/database");
const taskRouter = require("./src/routes/taskRouter");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/", taskRouter);

if (process.env.NODE_ENV !== "test") {
  sequelize
    .authenticate()
    .then(() => console.log("Database connected."))
    .catch((err) => console.error("DB connection error:", err));

  sequelize.sync().then(() => console.log("Tables created!"));

  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on ${PORT}`));
}

module.exports = app;
