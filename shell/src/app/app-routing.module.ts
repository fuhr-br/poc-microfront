import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponentComponent } from './not-found-component/not-found-component.component';

const routes: Routes = [
  {
    path: 'flights',
    loadChildren: () =>
         loadRemoteModule({
            type: 'module',
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            exposedModule: './Module'
        })
        .then(m => m.FlightsModule)
},

{
  path: '**',
  component: NotFoundComponentComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
