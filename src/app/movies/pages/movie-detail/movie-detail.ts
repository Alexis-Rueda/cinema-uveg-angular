import { Component, inject, OnInit } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from '@movies/services/movies.service';
import { map } from 'rxjs';
import { MovieImage3d } from '@movies/components/movie-image-3d/movie-image-3d';
import { MovieContent } from '@movies/components/movie-content/movie-content';
import { MovieDetailSkeleton } from '@movies/components/movie-detail-skeleton/movie-detail-skeleton';

@Component({
  selector: 'app-movie-detail',
  imports: [MovieImage3d, MovieContent, MovieDetailSkeleton],
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
