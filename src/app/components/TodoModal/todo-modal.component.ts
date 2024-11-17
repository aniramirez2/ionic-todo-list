import { Component, EventEmitter, Output } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { TodoInputComponent } from '../TodoInput/todo-input.component';
import { TodoSelectComponent } from '../TodoSelect/todo-select.component';
import { Categorie } from '../../models/categories.model';
import { Task } from 'src/app/models/task.model';
@Component({
  selector: 'app-task-modal',
  templateUrl: './todo-modal.component.html',
  standalone: true,
  imports: [IonicModule, CommonModule, TodoInputComponent, TodoSelectComponent],
})
export class TaskModalComponent {
  tasks: Task[] = JSON.parse(localStorage.getItem('tasks') || '[]');
  categories: Categorie[] = JSON.parse(localStorage.getItem('categories') || '[]');
  selectedCategorie: Categorie | null = null;

  constructor(private modalController: ModalController) {}

  closeModal() {
    this.modalController.dismiss();
  }

  generateRandomId(): string {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  addTask(taskText: string) {
    const task: Task = {
      name: taskText,
      completed: false,
      categorie: this.selectedCategorie?.name || '',
      id: this.generateRandomId(),
    };
    
    this.tasks.push(task);
    this.saveTasks();
    this.closeModal();
  }

  selectCategorie(category: Categorie) {
    this.selectedCategorie = category;
  }

  saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

}
