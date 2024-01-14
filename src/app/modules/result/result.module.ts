import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResultRoutingModule } from './result-routing.module';
import { ResultComponent } from './containers/result/result.component';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    ResultComponent
  ],
  imports: [
    CommonModule,
    ResultRoutingModule,
    MaterialModule
  ]
})
export class ResultModule { }
