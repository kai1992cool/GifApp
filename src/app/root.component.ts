// root.component.ts
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', // Use app.component.html as the template
  styleUrls: ['./app.component.css'], // Use app.component.css as the styles
})
export class RootComponent implements OnInit {
  
  gifs: { title: string, src: string }[] = []; // Declare gifs property
  categories: string[] = []; // Declare categories property

  ngOnInit() {
    this.gifs = [
      { title: 'gif1', src: 'assets/gif1.gif', },
      { title: 'gif2', src: 'assets/gif2.gif' },
      // Add more gifs here...
    ];

    this.categories = ['Category1', 'Category2', 'Category3']; // Add your categories here
  }

  redirectToGif(gif: { title: string, src: string }) {
    // Implement your redirectToGif method here...
  }
}