import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Categorie } from 'src/app/models/categories.model';
import { Task } from 'src/app/models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-input',
  templateUrl: './todo-input.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
})
export class TodoInputComponent {
  @Input() editableObject: Task | Categorie | null = null;
  @Output() addTaskEvent = new EventEmitter<string>();
  @Output() updateObjectEvent = new EventEmitter<Task | Categorie>();

  inputValue: string = '';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['editableObject'] && this.editableObject) {
        this.inputValue = this.editableObject.name;
    }
  }

  handleAdd() {
    if (this.inputValue.trim()) {
      this.addTaskEvent.emit(this.inputValue.trim());
      this.inputValue = '';
    }
  }

  handleUpdate() {
    if (this.editableObject) {
        const updatedObject: Task | Categorie = { ...this.editableObject, name: this.inputValue };
        this.updateObjectEvent.emit(updatedObject);
        this.inputValue = '';
    }
  }

}
