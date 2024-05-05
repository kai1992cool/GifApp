import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor]
})
export class AppComponent implements OnInit {
  
  gifs: { title: string, src: string }[] = []; // Declare gifs property
  categories: string[] = []; // Declare categories property
  uploadedGifs: { title: string, file: File }[] = [];

  ngOnInit() {
    this.gifs = [
      { title: 'gif1', src: 'assets/gif1.gif', },
      { title: 'gif2', src: 'assets/gif2.gif' },
      // Add more gifs here...
    ];

    this.categories = ['Category1', 'Category2', 'Category3']; // Add your categories here
  }
  

  constructor(private router: Router) {}

  redirectToGif(gif: { title: string, src: string }) {
    this.router.navigate(['/gif', gif.title]);
  }
}