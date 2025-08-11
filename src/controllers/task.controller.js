class TaskController {
  constructor(taskService) {
    this.taskService = taskService;
    // Bind methods to ensure 'this' context is correct
    this.createTask = this.createTask.bind(this);
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getTaskById = this.getTaskById.bind(this);
    this.updateTask = this.updateTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  async createTask(req, res) {
    try {
      const task = await this.taskService.createTask(req.body);
      res.status(201).json(task);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async getAllTasks(req, res) {
    try {
      const tasks = await this.taskService.getAllTasks();
      res.status(200).json(tasks);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async getTaskById(req, res) {
    try {
      const task = await this.taskService.getTaskById(req.params.id);
      if (task) {
        res.status(200).json(task);
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  async updateTask(req, res) {
    try {
      const updatedTask = await this.taskService.updateTask(
        req.params.id,
        req.body
      );
      if (updatedTask) {
        res.status(200).json(updatedTask);
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  }

  async deleteTask(req, res) {
    try {
      const success = await this.taskService.deleteTask(req.params.id);
      if (success) {
        res.status(204).send(); // No Content
      } else {
        res.status(404).json({ message: "Task not found" });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = TaskController;
