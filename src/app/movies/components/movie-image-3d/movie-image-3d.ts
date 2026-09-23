import { Component, input } from '@angular/core';
import { SimpleMovieDetail } from '@movies/interfaces';

@Component({
  selector: 'app-movie-image-3d',
  imports: [],
  templateUrl: './movie-image-3d.html',
})
export class MovieImage3d {
  movie = input.required<SimpleMovieDetail>();
}
