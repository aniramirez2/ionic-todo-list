import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-todo-header',
  templateUrl: './todo-header.component.html',
  standalone: true,
  imports: [IonicModule],
})
export class TodoHeaderComponent {
  constructor(
    private router: Router
  ) {}
  
  isCategoriesPage(): boolean {
    return this.router.url === '/categories';
  }
}
