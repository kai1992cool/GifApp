// upload.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent {
  title = '';
  file: File | null = null;

  @Output() gifUploaded = new EventEmitter<{ title: string, file: File }>();

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file && this.title) {
      this.gifUploaded.emit({ title: this.title, file: this.file });
      this.title = '';
      this.file = null;
    }
  }
}