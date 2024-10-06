import { Injectable } from '@angular/core';
import { dummyTasks } from './dummy-tasks';
import { type Task } from './task/task.model';
import { type NewTask } from './task/task.model';

@Injectable({ providedIn: 'root' })
export class TasksService {
  allTasks: Task[] = dummyTasks;

  getUserTasks(userId: string) {
    return this.allTasks.filter((task) => task.userId === userId);
  }

  addUserTask(task: NewTask, userId: string) {
    this.allTasks.push({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: userId,
    });
  }

  removeTask(id: string) {
    this.allTasks = this.allTasks.filter((task: Task) => task.id !== id);
  }
}
