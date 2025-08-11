class Task {
  constructor(
    id,
    title,
    description,
    isCompleted = false,
    createdAt,
    updatedAt
  ) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }
}

module.exports = Task;
