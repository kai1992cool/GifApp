import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor]
})
export class AppComponent {
  title = 'compiled';
  gifs = [
    { title: 'gif1', src: 'assets/gif1.gif' },
    { title: 'GIF2', src: 'assets/gif2.gif' },
    // Gifs
  ];

  constructor(private router: Router) {}

  redirectToGif(gif: { title: string, src: string }) {
    this.router.navigate(['/gif', gif.title]);
  }
}