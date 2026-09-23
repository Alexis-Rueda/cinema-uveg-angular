import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@environments/environment.development';
import { MovieDetailResponse, MovieMapper, SimpleMovieDetail, SimpleTopRatedMovie, TopRatedResponse } from '@movies/interfaces';
import { map, Observable, of, tap } from 'rxjs';

const baseUrl = environment.API_URL;

interface Options {
  page?: number;
}

@Injectable({ providedIn: 'root' })
export class MoviesService {
  private http = inject(HttpClient);

  private moviesCache = new Map<string, SimpleTopRatedMovie[]>();
  private movieDetailCache = new Map<string, SimpleMovieDetail>();

  getMovies(options: Options): Observable<SimpleTopRatedMovie[]> {
    const { page = 1 } = options;

    const key = `page-${page}`;
    if (this.moviesCache.has(key)) {
      return of(this.moviesCache.get(key)!);
    }

    return this.http
      .get<TopRatedResponse>(`${baseUrl}/movie/top_rated`, {
        params: {
          language: 'es-MX',
          page,
        },
      })
      .pipe(
        map((resp) => resp.results.map(MovieMapper.toSimpleTopRatedMovie)),
        tap((resp) => this.moviesCache.set(key, resp))
      );
  }

  getMovieDetailById(id: number): Observable<SimpleMovieDetail> {
    if (this.movieDetailCache.has(id.toString())) {
      return of(this.movieDetailCache.get(id.toString())!);
    }

    return this.http
      .get<MovieDetailResponse>(`${baseUrl}/movie/${id}`, {
        params: {
          language: 'es-MX',
        },
      })
      .pipe(
        map(MovieMapper.toSimpleMovieDetail),
        tap((product) => this.movieDetailCache.set(id.toString(), product))
      );
  }
}
