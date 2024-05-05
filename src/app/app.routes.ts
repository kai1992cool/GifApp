// app.routes.ts
import { Routes } from '@angular/router';
import { GifComponent } from '../gif/gif.component';
import { GifDetailComponent } from '../gif/gif-detail.component'; // Import GifDetailComponent
import { UploadComponent } from '../Upload/upload.component'; // Import UploadComponent

export const routes: Routes = [
  { path: 'gifs/:title', component: GifComponent },
  { path: 'gifs/category/:category', component: GifComponent },
  { path: 'upload', component: UploadComponent },
];