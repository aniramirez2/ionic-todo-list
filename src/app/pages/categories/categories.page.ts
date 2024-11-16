import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { Categorie } from 'src/app/models/categories.model';
import { TodoInputComponent } from 'src/app/components/TodoInput/todo-input.component';
import { TodoItemComponent } from 'src/app/components/TodoList/todo-list.component';

@Component({
    selector: 'app-categories',
    templateUrl: './categories.page.html',
    imports: [IonicModule, CommonModule, TodoInputComponent, TodoItemComponent],
    standalone: true,  
  })
  export class CategoriesPage {
    categories: Categorie[] = JSON.parse(localStorage.getItem('categories') || '[]');
    editableObject:  Categorie | null = null

    generateRandomId(): string {
        return Math.floor(100000 + Math.random() * 900000).toString();
    }

    addCategorie(name: string) {
        this.categories.push({ name, id: this.generateRandomId() });
        this.saveCategories();
    }

    editCategorie(categorie: Categorie) {
        this.editableObject = categorie
    }

    updateCategorie(categorie: Categorie) {
        const index = this.categories.findIndex(t => t.id === categorie.id);
        if (index !== -1) {
            this.categories[index] = { id: this.categories[index].id, name: categorie.name };
            this.saveCategories();
            this.editableObject = null
        }
    }

    deleteCategorie(categorie: Categorie) {
        this.categories = this.categories.filter(t => t !== categorie);
        this.saveCategories();
    }

    saveCategories() {
        localStorage.setItem('categories', JSON.stringify(this.categories));
    }

    trackById(index: number, categorie: Categorie): number {
        return Number(categorie.id);
    }
  }
