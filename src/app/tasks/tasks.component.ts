import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from './dummy-tasks';
import { NewTaskComponent } from './new-task/new-task.component';
import { type Task } from './task/task.model';
import { type NewTask } from './task/task.model';
import { TasksService } from './tasks.service';

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

  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onTaskComplete(id: string) {
    this.tasksService.removeTask(id);
  }

  onStartAddTask() {
    this.showAddNewTask = true;
  }

  onCancelAddTask() {
    this.showAddNewTask = false;
  }

  onAddNewTask(task: NewTask) {
    this.tasksService.addUserTask(task, this.userId);
    this.showAddNewTask = false;
  }
}
