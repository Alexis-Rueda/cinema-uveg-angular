import { DecimalPipe, DatePipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '@movies/services/movies.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-movie-detail',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './movie-detail.html',
})
export class MovieDetail implements OnInit {

  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private moviesService = inject(MoviesService);

  movieId = toSignal(this.route.params.pipe(map(({ id }) => +id)));

  ngOnInit(): void {
    if (!this.movieId()) {
      this.reDirectToMoviesPage();
    }
  }

  movieResource = rxResource({
    params: () => ({
      id: this.movieId()
     }),
     stream: ({ params }) => this.moviesService.getMovieDetailById(params.id!),
  });

  private reDirectToMoviesPage() {
    this.router.navigate(['/movies']);
  }

}
