import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { UserSelectionComponent } from './containers/user-selection/user-selection.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [
    UserSelectionComponent,
    LanguageCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  exports : [
    
  ]
})
export class HomeModule { }
