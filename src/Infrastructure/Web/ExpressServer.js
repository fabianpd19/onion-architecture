import express from "express";
import bodyParser from "body-parser";

export function createServer({ createTask, getTasks, completeTask }) {
  const app = express();
  app.use(bodyParser.json());

  app.get("/tasks", (req, res) => res.json(getTasks.execute()));

  app.post("/tasks", (req, res) => {
    const task = createTask.execute(req.body.title);
    res.status(201).json(task);
  });

  app.put("/tasks/:id/complete", (req, res) => {
    const task = completeTask.execute(req.params.id);
    res.json(task);
  });

  return app;
}
