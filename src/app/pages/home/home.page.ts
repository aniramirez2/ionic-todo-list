import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from 'src/app/components/TodoInput/todo-input.component';
import { TodoItemComponent } from 'src/app/components/TodoList/todo-list.component';
import { Categorie } from 'src/app/models/categories.model';
import { TodoSelectComponent } from 'src/app/components/TodoSelect/todo-select.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  imports: [IonicModule, TodoInputComponent, TodoItemComponent, CommonModule, TodoSelectComponent],
  standalone: true,  
})
export class HomePage {
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  categories: Categorie[] = JSON.parse(localStorage.getItem('categories') || '[]');
  selectedCategorie: Categorie | null = null

  generateRandomId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  addTask(taskText: string) {
    this.tasks.push({ name: taskText, completed: false, id: this.generateRandomId(), categorie: this.selectedCategorie?.name || '' });
    this.saveTasks();
  }

  updateTask(task: Task) {
    const taskIndex = this.tasks.findIndex(t => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = { ...this.tasks[taskIndex], completed: !this.tasks[taskIndex].completed };
      this.saveTasks();
    }
  }

  selectCategorie(cat: Categorie){
    this.selectedCategorie = cat
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
