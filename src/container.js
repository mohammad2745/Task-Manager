const SequelizeTaskRepository = require("./repositories/sequelize.task.repository");
const TaskService = require("./use-cases/task.service");
const TaskController = require("./controllers/task.controller");

// Create instances and inject dependencies (Dependency Injection)
const taskRepository = new SequelizeTaskRepository();
const taskService = new TaskService(taskRepository);
const taskController = new TaskController(taskService);

module.exports = {
  taskController,
};
