import { Component, Input, Output, EventEmitter } from '@angular/core';

import { type User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  // @Input({ required: true }) id!: string;
  // @Input({ required: true }) avatar!: String;
  // @Input({ required: true }) name!: String;
  @Input({ required: true }) user?: User;
  @Input({ required: true }) selected!: boolean;
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
