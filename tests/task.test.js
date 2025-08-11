const request = require("supertest");
const app = require("../server");
const sequelize = require("../config/database");
const Task = require("../models/task.model");

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
});
