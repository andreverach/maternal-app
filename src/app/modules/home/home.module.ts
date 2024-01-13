import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { HomeRoutingModule } from './home-routing.module';
import { UserSelectionComponent } from './containers/user-selection/user-selection.component';
import { LanguageCardComponent } from './components/language-card/language-card.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserSelectionComponent,
    LanguageCardComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule
  ],
  exports : [
    
  ]
})
export class HomeModule { }
