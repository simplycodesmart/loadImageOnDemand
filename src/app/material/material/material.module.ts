import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


const IMPORT_EXPORT = [MatCardModule, MatButtonModule]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [...IMPORT_EXPORT]
})
export class MaterialModule { }
