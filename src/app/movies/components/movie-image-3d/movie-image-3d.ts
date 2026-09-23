import { Component, input } from '@angular/core';

@Component({
  selector: 'app-movie-image-3d',
  imports: [],
  templateUrl: './movie-image-3d.html',
})
export class MovieImage3d {
  movieImageUrl = input.required<string>();
  movieName = input.required<string>();
}
