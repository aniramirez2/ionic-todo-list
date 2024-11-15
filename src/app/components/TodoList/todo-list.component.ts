import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-list.component.html',
  standalone: true,  
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TodoItemComponent {
  @Input() task: any = {}; 
  @Output() deleteTaskEvent = new EventEmitter<Task>();
  @Output() updateTaskEvent = new EventEmitter<Task>();

  deleteTask(task: Task) {
    this.deleteTaskEvent.emit(task);
  }

  updateTask(task: Task) {
    task.completed = !task.completed;
    this.updateTaskEvent.emit(task);
  }
}
