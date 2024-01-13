import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserSelectionComponent } from './modules/home/containers/user-selection/user-selection.component';
import { IndexComponent } from './modules/questionnaire/containers/index/index.component';
import { ResultComponent } from './modules/result/containers/result/result.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: UserSelectionComponent,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./modules').then(m => m.HomeModule),
      },
    ]
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'questionnaire',
        loadChildren: () => import('./modules').then(m => m.QuestionnaireModule),
      },
    ]
  },
  {
    path: '',
    component: ResultComponent,
    children: [
      {
        path: 'results',
        loadChildren: () => import('./modules').then(m => m.QuestionnaireModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
