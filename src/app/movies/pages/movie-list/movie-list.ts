import { Component, inject } from '@angular/core';
import { MoviesService } from '@movies/services/movies.service';

import { rxResource } from '@angular/core/rxjs-interop';
import { DatePipe, DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Pagination } from '@shared/components/pagination/pagination';
import { PaginationService } from '@shared/components/pagination/pagination.service';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink, DecimalPipe, DatePipe, Pagination],
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
