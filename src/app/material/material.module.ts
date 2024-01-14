import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    
  ],
  exports: [
    MatRadioModule,
    MatCardModule,
    MatButtonModule,    
  ]
})
export class MaterialModule { }
