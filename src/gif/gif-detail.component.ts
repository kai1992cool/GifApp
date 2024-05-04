// gif-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-gif-detail',
  templateUrl: './gif.component.html', // Use the external HTML file as the template
  standalone: true,
  imports: [RouterLink, RouterOutlet, NgFor]
})
export class GifDetailComponent implements OnInit {
  gif: { src: string, title: string } = { src: '', title: '' }; // Initialize gif to an object with src and title properties

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.gif.title = this.route.snapshot.paramMap.get('title') || '';
    // You should also set this.gif.src to the source of the gif here
  }
}