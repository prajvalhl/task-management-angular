import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task/task.model';
import { type NewTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  allTasks: Task[] = dummyTasks;
  showAddNewTask: boolean = false;

  get selectedUserTasks() {
    return this.allTasks.filter((task) => task.userId === this.userId);
  }

  onTaskComplete(id: string) {
    this.allTasks = this.allTasks.filter((task: Task) => task.id !== id);
  }

  onStartAddTask() {
    this.showAddNewTask = true;
  }

  onCancelAddTask() {
    this.showAddNewTask = false;
  }

  onAddNewTask(task: NewTask) {
    this.allTasks.push({
      id: new Date().getTime().toString(),
      title: task.title,
      summary: task.summary,
      dueDate: task.date,
      userId: this.userId,
    });
    this.showAddNewTask = false;
  }
}
