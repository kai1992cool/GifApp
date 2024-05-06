import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
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
    providers: [],
  })
  export class SharedModule { }