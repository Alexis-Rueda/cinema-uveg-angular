import { Component, inject } from '@angular/core';
import { MoviesService } from '@movies/services/movies.service';

import { rxResource } from '@angular/core/rxjs-interop';
import { Pagination } from '@shared/components/pagination/pagination';
import { PaginationService } from '@shared/components/pagination/pagination.service';
import { MovieItemSkeletonList } from '@movies/components/movie-item-skeleton-list/movie-item-skeleton-list';
import { MovieItemList } from '@movies/components/movie-item-list/movie-item-list';

@Component({
  selector: 'app-movie-list',
  imports: [Pagination, MovieItemSkeletonList, MovieItemList],
  templateUrl: './movie-list.html',
})
export class MovieList {

  moviesService = inject(MoviesService);
  paginationService = inject(PaginationService);

  moviesResource = rxResource({
    params: () => ({
      page: this.paginationService.currentPage()
     }),
     stream: ({ params }) => this.moviesService.getMovies(params),
  });

}
