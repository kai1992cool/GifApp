// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component'; // Import RootComponent
import { GifDetailComponent } from '../gif/gif-detail.component'; // Import GifDetailComponent
import { SharedModule } from './shared.module';
import { RouterModule } from '@angular/router';
import { UploadModule } from '../Upload/upload.module';

@NgModule({
  declarations: [
    RootComponent, // Declare RootComponent
    GifDetailComponent,
  ],
  imports: [
    RouterModule,
    BrowserModule,
    UploadModule,
    SharedModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [ RootComponent ] // Bootstrap RootComponent
})
export class AppModule { }