// upload.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { UploadComponent } from './upload.component';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    CommonModule,
    
    FormsModule, // Use FormsModule instead of ReactiveFormsModule
  ],
  exports: [UploadComponent]
})
export class UploadModule { }