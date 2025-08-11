const express = require("express");
const taskRoutes = require("./routes/task.routes");

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.get("/", (req, res) => {
  res.send("Task Management API is running...");
});
app.use("/api", taskRoutes);

module.exports = app;
