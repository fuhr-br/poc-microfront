import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full'},
    {
      path: 'mfe2',
      loadChildren: () =>
           loadRemoteModule({
              type: 'module',
              remoteEntry: 'http://localhost:4202/remoteEntry.js',
              exposedModule: './Module'
          })
          .then(m => m.AppModule)
  },
];
