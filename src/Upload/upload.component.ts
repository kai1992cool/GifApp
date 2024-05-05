// upload.component.ts
import { Component, Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  title = '';
  file: File | null = null;

  constructor(private http: HttpClient) {}

  onFileChange(event: any) {
    this.file = event.target.files[0];
  }

  onSubmit() {
    if (this.file && this.title) {
      const formData = new FormData();
      formData.append('file', this.file, this.file.name);

      this.http.post('http://localhost:4200/upload', formData)
        .pipe(finalize(() => {
          this.title = '';
          this.file = null;
        }))
        .subscribe(() => {
          console.log('File uploaded successfully');
        }, error => {
          console.error('There was an error uploading the file', error);
        });
    }
  }
}