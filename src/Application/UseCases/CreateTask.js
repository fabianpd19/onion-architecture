export class CreateTask {
  constructor(taskRepo) {
    this.taskRepo = taskRepo;
  }

  execute(title) {
    const id = Date.now().toString();
    const task = { id, title, completed: false };
    this.taskRepo.add(task);
    return task;
  }
}
