import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TodoItemComponent } from 'src/app/components/TodoList/todo-list.component';
import { Task } from 'src/app/models/task.model';
import { TaskModalComponent } from 'src/app/components/TodoModal/todo-modal.component';
import { Categorie } from 'src/app/models/categories.model';
import { TodoSelectComponent } from 'src/app/components/TodoSelect/todo-select.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    TodoItemComponent,
    TaskModalComponent,
    TodoSelectComponent,
  ],
})
export class HomePage {
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  categories: Categorie[] = JSON.parse(localStorage.getItem('categories') || '[]');
  selectedCategorie: Categorie | null = null;

  
  get filteredTasks(): Task[] {
    if (this.selectedCategorie) {
      return this.tasks.filter(
        (task) => task.categorie === this.selectedCategorie?.name
      );
    }
    return this.tasks;
  }

  trackById(index: number, task: Task): string {
    return task.id;
  }

  deleteTask(task: Task) {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
    this.saveTasks();
  }

  updateTask(task: Task) {
    const taskIndex = this.tasks.findIndex((t) => t.id === task.id);
    if (taskIndex !== -1) {
      this.tasks[taskIndex] = {
        ...this.tasks[taskIndex],
        completed: !this.tasks[taskIndex].completed,
      };
      this.saveTasks();
    }
  }

  selectCategorie(category: Categorie) {
    this.selectedCategorie = category;
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  clearFilter() {
    this.selectedCategorie = null
  }
}
