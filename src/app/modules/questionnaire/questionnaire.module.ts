import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionnaireRoutingModule } from './questionnaire-routing.module';
import { IndexComponent } from './containers/index/index.component';
import { QuestionComponent } from './components/question/question.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    IndexComponent,
    QuestionComponent
  ],
  imports: [
    CommonModule,
    QuestionnaireRoutingModule,
    ReactiveFormsModule
  ],
  exports: [
    
  ]
})
export class QuestionnaireModule { }
