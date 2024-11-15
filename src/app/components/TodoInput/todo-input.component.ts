import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule]
})
export class TodoInputComponent {
  newTask: string = '';

  @Output() addTaskEvent = new EventEmitter<string>();

  addTask() {
    if (this.newTask.trim()) {
      this.addTaskEvent.emit(this.newTask.trim());
      this.newTask = '';
    }
  }
}
