import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TodoHeaderComponent } from '../TodoHeader/todo-header.component';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-layout',
  template: `
    <ion-header>
        <app-todo-header></app-todo-header>
    </ion-header>
    <ion-content>
        <nav class="nav-links">
            <ion-item routerLink="/home">
                <ion-label>Home</ion-label>
            </ion-item>
            <ion-item routerLink="/categories">
                <ion-label>Categories</ion-label>
            </ion-item>
        </nav>
        <router-outlet></router-outlet>
    </ion-content>
  `,
  standalone: true,
  imports: [RouterModule, TodoHeaderComponent, IonicModule],
})
export class LayoutComponent {}
