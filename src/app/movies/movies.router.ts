import { Routes } from '@angular/router';

import { MoviesLayout } from './layout/movies-layout/movies-layout';
import { MovieDetail, MovieList } from './pages';

export const movieRoutes: Routes = [
  {
    path: '',
    component: MoviesLayout,
    children: [
      {
        path: '',
        component: MovieList
      },
      {
        path: ':id',
        component: MovieDetail
      },
    ]
  }
];

export default movieRoutes;
