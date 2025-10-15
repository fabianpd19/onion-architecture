export class CompleteTask {
  constructor(taskRepo) {
    this.taskRepo = taskRepo;
  }

  execute(id) {
    return this.taskRepo.complete(id);
  }
}
