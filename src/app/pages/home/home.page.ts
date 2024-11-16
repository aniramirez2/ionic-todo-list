import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from 'src/app/components/TodoInput/todo-input.component';
import { TodoItemComponent } from 'src/app/components/TodoList/todo-list.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [IonicModule, TodoInputComponent, TodoItemComponent, CommonModule],
  standalone: true,  
})
export class HomePage {
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');

  generateRandomId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  addTask(taskText: string) {
    this.tasks.push({ name: taskText, completed: false, id: this.generateRandomId() });
    this.saveTasks();
  }

  updateTask(task: Task) {
    const taskIndex = this.tasks.findIndex(t => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], completed: !this.tasks[taskIndex].completed };
      this.saveTasks();
    }
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter(t => t !== task);
    this.saveTasks();
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  trackById(index: number, task: any): number {
    return task.id;
  }
}
