// gif.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gif',
  templateUrl: './gif.component.html',
})
export class GifComponent implements OnInit {
  gif: { title: string, src: string } = { title: '', src: '' }; // Declare gif property

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.gif.title = this.route.snapshot.paramMap.get('title') || '';
    this.gif.src = `assets/${this.gif.title}.gif`;
  }
}