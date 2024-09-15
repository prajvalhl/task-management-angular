import { Component, Input, Output, EventEmitter } from '@angular/core';

type User = {
  id: string;
  name: string;
  avatar: string;
};

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: String;
  // @Input({ required: true }) name!: String;
  @Input({ required: true }) user?: User;
  @Output() select = new EventEmitter();

  get imagePath() {
    return `assets/users/${this.user?.avatar}`;
  }

  get imageName() {
    return this.user?.name;
  }

  onClick() {
    this.select.emit(this.user?.id);
  }
}
