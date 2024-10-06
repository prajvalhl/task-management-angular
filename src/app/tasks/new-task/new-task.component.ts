import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTask>();

  taskTitle: string = '';
  taskSummary: string = '';
  taskDueDate: string = '';

  onClickCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.taskTitle,
      summary: this.taskSummary,
      date: this.taskDueDate,
    });
  }
}
