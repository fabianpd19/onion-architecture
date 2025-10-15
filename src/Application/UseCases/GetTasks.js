export class GetTasks {
  constructor(taskRepo) {
    this.taskRepo = taskRepo;
  }

  execute() {
    return this.taskRepo.getAll();
  }
}
