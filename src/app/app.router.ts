import { HomePage } from './pages/home/home.page';
import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'home', component: HomePage },
  { path: '**', component: HomePage }
];
