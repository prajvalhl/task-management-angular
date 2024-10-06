import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {
  @Input() task!: Task;
  @Output() completed = new EventEmitter<string>();

  onTaskComplete() {
    this.completed.emit(this.task.id);
  }
}
