import { InMemoryTaskRepository } from "./Infrastructure/Database/InMemoryTaskRepository.js";
import { CreateTask } from "./Application/UseCases/CreateTask.js";
import { GetTasks } from "./Application/UseCases/GetTasks.js";
import { CompleteTask } from "./Application/UseCases/CompleteTask.js";
import { createServer } from "./Infrastructure/Web/ExpressServer.js";

const repo = new InMemoryTaskRepository();
const app = createServer({
  createTask: new CreateTask(repo),
  getTasks: new GetTasks(repo),
  completeTask: new CompleteTask(repo),
});

app.listen(3000, () =>
  console.log("🚀 Server running on http://localhost:3000")
);
