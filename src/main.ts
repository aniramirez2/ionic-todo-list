import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { provideFirebaseApp } from '@angular/fire/app';
import { provideRemoteConfig } from '@angular/fire/remote-config';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { app, remoteConfig } from './firebase.config';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideFirebaseApp(() => app),
    provideRemoteConfig(() => remoteConfig),
  ],
});
