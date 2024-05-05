// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component'; // Import RootComponent
import { GifDetailComponent } from '../gif/gif-detail.component'; // Import GifDetailComponent
import { UploadComponent } from '../Upload/upload.component'; // Import UploadComponent
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RootComponent, // Declare RootComponent
    GifDetailComponent,
    UploadComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [ RootComponent ] // Bootstrap RootComponent
})
export class AppModule { }