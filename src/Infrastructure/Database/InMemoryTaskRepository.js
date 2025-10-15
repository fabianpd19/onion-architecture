import { TaskRepository } from "../../Domain/Interfaces/TaskRepository.js";

export class InMemoryTaskRepository extends TaskRepository {
  constructor() {
    super();
    this.tasks = [];
  }

  add(task) {
    this.tasks.push(task);
  }

  getAll() {
    return this.tasks;
  }

  complete(id) {
    const task = this.tasks.find((t) => t.id === id);
    if (task) task.completed = true;
    return task;
  }
}
