import { MovieDetailResponse } from "./movie-detail.interface";
import { SimpleMovieDetail } from "./simple-movie-detail.interface";
import { SimpleTopRatedMovie, SimpleTopRatedResponse } from "./simple-top-rated-movie.interface";
import { TopRatedMovie, TopRatedResponse } from "./top-rated-movies.interface";

export class MovieMapper {

  static toSimpleMovieDetail(movie: MovieDetailResponse): SimpleMovieDetail {
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

  static toSimpleTopRatedMovieResponse(movies: TopRatedResponse): SimpleTopRatedResponse {
    return {
      page: movies.page,
      movies: movies.results.map(this.toSimpleTopRatedMovie),
      total_pages: movies.total_pages,
      total_results: movies.total_results
    }
  }

  static toSimpleTopRatedMovie(movie: TopRatedMovie): SimpleTopRatedMovie {
    return {
      id: movie.id,
      backdrop_path: movie.backdrop_path,
      poster_path: movie.poster_path,
      title: movie.title,
      overview: movie.overview,
      popularity: movie.popularity,
      release_date: movie.release_date,
      vote_average: movie.vote_average
    }
  }

}
