import { Component, OnInit } from '@angular/core';
import { inject } from '@angular/core';  // Importa 'inject' para usarlo correctamente
import { IonicModule } from '@ionic/angular';
import { fetchAndActivate, getString } from '@angular/fire/remote-config';
import { RemoteConfig } from '@angular/fire/remote-config';  // Asegúrate de tener RemoteConfig importado
import { TodoHeaderComponent } from '../TodoHeader/todo-header.component';
import { RouterModule } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { add, duplicateOutline, arrowBackCircleOutline } from 'ionicons/icons';
import { TaskModalComponent } from '../TodoModal/todo-modal.component';


@Component({
  selector: 'app-layout',
  standalone: true,
  templateUrl: './layout.component.html',
  imports: [RouterModule, TodoHeaderComponent, IonicModule, TaskModalComponent]
})
export class LayoutComponent implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {
    addIcons({ add, duplicateOutline, arrowBackCircleOutline });
  }

  bannerText: string = '';

  private remoteConfig = inject(RemoteConfig);

  ngOnInit() {
    this.loadRemoteConfig();
  }

  async loadRemoteConfig() {
    try {
      await fetchAndActivate(this.remoteConfig);
      const remoteConfig = getString(this.remoteConfig, 'welcome_message')
      this.bannerText = remoteConfig ? remoteConfig : 'Generic Welcome';
    } catch (error) {
      console.error('Error al obtener la configuración remota:', error);
    }
  }

  async openTaskModal() {
    const modal = await this.modalController.create({
      component: TaskModalComponent
    });
    await modal.present();
  }

  goToCategories(){
    this.router.navigate(['/categories']);
  }

  goToHome(){
    this.router.navigate(['/home']);
  }

  isCategoriesPage(): boolean {
    return this.router.url === '/categories';
  }
}
