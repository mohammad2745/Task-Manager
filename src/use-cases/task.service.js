class TaskService {
  constructor(taskRepository) {
    this.taskRepository = taskRepository;
  }

  async createTask(data) {
    if (!data.title) {
      throw new Error("Task title is required.");
    }
    return await this.taskRepository.add(data);
  }

  async getTaskById(id) {
    return await this.taskRepository.getById(id);
  }

  async getAllTasks() {
    return await this.taskRepository.getAll();
  }

  async updateTask(id, data) {
    const existingTask = await this.taskRepository.getById(id);
    if (!existingTask) {
      return null;
    }
    return await this.taskRepository.update(id, data);
  }

  async deleteTask(id) {
    const taskExists = await this.taskRepository.getById(id);
    if (!taskExists) {
      return false;
    }
    return await this.taskRepository.delete(id);
  }
}

module.exports = TaskService;
