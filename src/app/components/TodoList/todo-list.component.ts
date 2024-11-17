import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Task } from '../../models/task.model';
import { trash, createOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-list.component.html',
  standalone: true,  
  imports: [IonicModule, FormsModule, CommonModule]
})
export class TodoItemComponent {
  @Input() task: any = {};
  @Input() isTaskList: boolean = true;
  @Output() deleteTaskEvent = new EventEmitter<Task>();
  @Output() updateTaskEvent = new EventEmitter<Task>();

  constructor() {
    addIcons({ trash, createOutline });
  }

  deleteTask(task: Task) {
    this.deleteTaskEvent.emit(task);
  }

  updateTask(task: Task) {
    task.completed = !task.completed;
    this.updateTaskEvent.emit(task);
  }
}
