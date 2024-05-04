// gif.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html', // Use templateUrl instead of template
})
export class GifComponent implements OnInit {
  title: string = '';
  src: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.title = this.route.snapshot.paramMap.get('title') || '';
    this.src = `assets/${this.title}.gif`;
  }
}