import { DecimalPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { SimpleMovieDetail } from '@movies/interfaces';

@Component({
  selector: 'app-movie-content',
  imports: [DecimalPipe, DatePipe],
  templateUrl: './movie-content.html',
})
export class MovieContent {
  movie = input.required<SimpleMovieDetail>();
}
