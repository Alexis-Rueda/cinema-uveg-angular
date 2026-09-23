import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'movies',
    loadChildren: () => import('./movies/movies.router')
  },
  {
    path:'**',
    redirectTo: 'movies'
  }
];
