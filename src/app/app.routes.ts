import { Routes } from '@angular/router';
import { HomePageComponent } from './Model/home-page/home-page.component';

export const routes: Routes = [
   {
      path: '',
      redirectTo: 'Homepage',
      pathMatch: 'full'
   },
   {
      path: 'Homepage',
      component: HomePageComponent
   },
   {
      path: 'Login',
      loadChildren: () => import('./module/loing.module').then( m => m.LoingModule)
   }
];
