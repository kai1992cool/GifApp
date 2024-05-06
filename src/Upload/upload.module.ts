// upload.module.ts
import { NgModule } from '@angular/core';
import { UploadComponent } from './upload.component';
import { SharedModule } from '../app/shared.module';

@NgModule({
  declarations: [UploadComponent],
  imports: [
    SharedModule,
  ],
  exports: [UploadComponent],
})
export class UploadModule { }