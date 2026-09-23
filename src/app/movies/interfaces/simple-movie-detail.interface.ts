import { Genre, ProductionCompany, ProductionCountry } from "./movie-detail.interface";

export interface SimpleMovieDetailResponse {
  id:                    number;
  title:                 string;
  backdrop_path:         string;
  genres:                Genre[];
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  status:                string;
  vote_average:          number;
}

