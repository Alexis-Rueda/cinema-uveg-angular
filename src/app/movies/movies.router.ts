import { Routes } from '@angular/router';

import { MovieList } from './pages/movie-list/movie-list';
import { MovieDetail } from './pages/movie-detail/movie-detail';
import { MoviesLayout } from './layout/movies-layout/movies-layout';

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
