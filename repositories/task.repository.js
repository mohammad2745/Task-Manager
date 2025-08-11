class TaskRepository {
  async add(taskData) {
    throw new Error("Method 'add()' must be implemented.");
  }

  async getById(id) {
    throw new Error("Method 'getById()' must be implemented.");
  }

  async getAll() {
    throw new Error("Method 'getAll()' must be implemented.");
  }

  async update(id, taskData) {
    throw new Error("Method 'update()' must be implemented.");
  }

  async delete(id) {
    throw new Error("Method 'delete()' must be implemented.");
  }
}

module.exports = TaskRepository;
