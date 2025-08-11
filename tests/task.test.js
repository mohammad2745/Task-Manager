const request = require("supertest");
const app = require("../src/server");
const sequelize = require("../src/config/database");
const Task = require("../src/models/task.model");

beforeAll(async () => {
  await sequelize.sync({ force: true });
});

afterAll(async () => {
  await sequelize.close();
});

describe("Task API", () => {
  it("should create a new task", async () => {
    const res = await request(app).post("/tasks").send({
      title: "Test Task",
      description: "Testing create task",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe("Test Task");
  });

  it("should get all tasks", async () => {
    const res = await request(app).get("/tasks");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("should get a single task by ID", async () => {
    const task = await Task.create({
      title: "Single Task",
      description: "Testing single task fetch",
    });

    const res = await request(app).get(`/tasks/${task.id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Single Task");
  });

  it("should update a task", async () => {
    const task = await Task.create({
      title: "Update Task",
      description: "Before update",
    });

    const res = await request(app)
      .put(`/tasks/${task.id}`)
      .send({ title: "Updated Task", isCompleted: true });

    expect(res.statusCode).toBe(200);
    expect(res.body.title).toBe("Updated Task");
    expect(res.body.isCompleted).toBe(true);
  });

  it("should delete a task", async () => {
    const task = await Task.create({
      title: "Delete Task",
      description: "Testing delete",
    });

    const res = await request(app).delete(`/tasks/${task.id}`);
    expect(res.statusCode).toBe(204); // No Content

    const deleted = await Task.findByPk(task.id);
    expect(deleted).toBeNull();
  });
});
