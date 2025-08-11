const express = require("express");
const sequelize = require("./config/database");
const taskRouter = require("./routes/taskRouter");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Test database connection
sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Sync all models with the database
sequelize.sync().then(() => {
  console.log("Tables created!");
});

app.use("/", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
