import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  allUsers = DUMMY_USERS;
  selectedName?: string;

  onSelect(id: string) {
    for (let i of this.allUsers) {
      if (i.id === id) {
        this.selectedName = i.name;
      }
    }
    // console.log(`We got ${id} id from the event emitter`);
  }
}
