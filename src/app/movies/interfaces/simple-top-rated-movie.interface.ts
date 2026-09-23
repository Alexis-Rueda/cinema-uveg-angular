
export interface SimpleTopRatedResponse {
  page:          number;
  movies:       SimpleTopRatedMovie[];
  total_pages:   number;
  total_results: number;
}

export interface SimpleTopRatedMovie {
  id:                number;
  backdrop_path:     string;
  poster_path:       string;
  title:             string;
  overview:          string;
  popularity:        number;
  release_date:      Date;
  vote_average:      number;
}
