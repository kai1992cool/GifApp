// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component'; // Import RootComponent
import { GifDetailComponent } from '../gif/gif-detail.component'; // Import GifDetailComponent
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadComponent } from '../Upload/upload.component'; // Import UploadComponent
import { UploadModule } from '../Upload/upload.module'; // Import UploadModule

@NgModule({
  declarations: [
    RootComponent, // Declare RootComponent
    GifDetailComponent,
    
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    UploadModule,
  ],
  providers: [],
  bootstrap: [ RootComponent ] // Bootstrap RootComponent
})
export class AppModule { }