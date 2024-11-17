import { Component, CUSTOM_ELEMENTS_SCHEMA, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Categorie } from 'src/app/models/categories.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo-select',
  templateUrl: './todo-select.component.html',
  standalone: true,
  imports: [IonicModule, FormsModule, CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],  // Agrega CUSTOM_ELEMENTS_SCHEMA aquí

})
export class TodoSelectComponent {
  @Input() selectItems: Array<Categorie> = [];
  @Output() selectedItemEvent = new EventEmitter<Categorie>();

  selectedValue: Categorie | null = null;


  handleSelectionChange(cat: any) {
    this.selectedValue = cat.detail.value
    if (this.selectedValue) {
      this.selectedItemEvent.emit(this.selectedValue);
      this.selectedValue = null
    }
  }

}
