// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RootComponent } from './root.component'; // Import RootComponent

@NgModule({
  declarations: [
    RootComponent, // Declare RootComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [RootComponent] // Bootstrap RootComponent
})
export class AppModule { }