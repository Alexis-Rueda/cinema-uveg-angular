import { DecimalPipe, DatePipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SimpleTopRatedMovie } from '@movies/interfaces';

@Component({
  selector: 'app-movie-item-list',
  imports: [RouterLink, DecimalPipe, DatePipe],
  templateUrl: './movie-item-list.html',
})
export class MovieItemList {
  movie = input.required<SimpleTopRatedMovie>();
}
