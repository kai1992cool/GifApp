import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { UploadModule } from "../Upload/upload.module";
import { HttpClientModule, provideHttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
    ],
    exports: [
      CommonModule,
      FormsModule,
      HttpClientModule,
    ],
    providers: [provideHttpClient()],
  })
  export class SharedModule { }