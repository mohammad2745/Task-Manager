const TaskRepository = require("./task.repository");
const TaskModel = require("../models/task.model");
const Task = require("../domain/task");

class SequelizeTaskRepository extends TaskRepository {
  // Helper to map DB model to domain entity
  _toEntity(dbModel) {
    if (!dbModel) return null;
    return new Task(
      dbModel.id,
      dbModel.title,
      dbModel.description,
      dbModel.isCompleted,
      dbModel.createdAt,
      dbModel.updatedAt
    );
  }

  async add(taskData) {
    const newTask = await TaskModel.create(taskData);
    return this._toEntity(newTask);
  }

  async getById(id) {
    const task = await TaskModel.findByPk(id);
    return this._toEntity(task);
  }

  async getAll() {
    const tasks = await TaskModel.findAll({ order: [["createdAt", "DESC"]] });
    return tasks.map((task) => this._toEntity(task));
  }

  async update(id, taskData) {
    const [updatedCount] = await TaskModel.update(taskData, {
      where: { id },
    });
    if (updatedCount === 0) {
      return null;
    }
    return this.getById(id);
  }

  async delete(id) {
    const deletedCount = await TaskModel.destroy({
      where: { id },
    });
    return deletedCount > 0;
  }
}

module.exports = SequelizeTaskRepository;
