import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  @Input() avatar!: String;
  @Input() name!: String;

  get imagePath() {
    return `assets/users/${this.avatar}`;
  }

  get imageName() {
    return this.name;
  }

  onClick() {}
}
