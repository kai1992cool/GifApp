// gif.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
})
export class GifComponent implements OnInit {
  category: string = ''; 
  gifs: { title: string, src: string, category: string }[] = []; 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('category') || '';
    this.fetchGifs();
    this.gifs = this.gifs.filter(gif => gif.category === this.category);
  }

  fetchGifs() {
    // Fetch your gifs here...
    // This is just a placeholder. Replace it with your actual logic to fetch gifs.
  }
}