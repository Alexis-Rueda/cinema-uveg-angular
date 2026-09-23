import { MovieDetailResponse } from "./movie-detail.interface";
import { SimpleMovieDetailResponse } from "./simple-movie-detail.interface";
import { SimpleTopRatedMovie } from "./simple-top-rated-movie.interface";
import { TopRatedMovie } from "./top-rated-movies.interface";

export class MovieMapper {

  static toSimpleMovieDetail(movie: MovieDetailResponse): SimpleMovieDetailResponse {
    return {
      id: movie.id,
      title: movie.title,
      backdrop_path: movie.backdrop_path,
      genres: movie.genres,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: movie.poster_path,
      production_companies: movie.production_companies,
      production_countries: movie.production_countries,
      release_date: movie.release_date,
      status: movie.status,
      vote_average: movie.vote_average
    }
  }

  static toSimpleTopRatedMovie(movie: TopRatedMovie): SimpleTopRatedMovie {
    return {
      id: movie.id,
      backdrop_path: movie.backdrop_path,
      title: movie.title,
      overview: movie.overview,
      popularity: movie.popularity,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    }
  }

}
