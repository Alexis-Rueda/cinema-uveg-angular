import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-movies-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './movies-layout.html',
})
export class MoviesLayout {}
