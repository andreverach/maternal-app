import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/core/services/response.service';
import { questionListEnglish } from 'src/app/shared/constants/list';
import { QuestionnaireDto } from 'src/app/shared/interfaces/questionnaire';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  initialIndex: number = 0;
  dataView$: any;
  questionListSelected: QuestionnaireDto[] = [];
  constructor(
    private responseService: ResponseService,
    private router: Router
  ) { }

  ngOnInit(): void {
    //this.questionListSelected = questionListEnglish;
    this.responseService.getCurrentUserSelection.subscribe(userData => {
      if(userData.name === '') {
        this.router.navigateByUrl('/');
      }
    })
    this.responseService.getCurrentQuestionnaire.subscribe(data => {
      this.questionListSelected = data;
    })
    this.dataView$ = this.responseService.getCurrentQuestionnaire;
  }

  nextQuestion() {
    if(this.initialIndex >= 4) {
      this.router.navigateByUrl('/results');
      return;
    }
    if(this.questionListSelected[this.initialIndex].answerSelected === -1 || this.questionListSelected[this.initialIndex + 1].answerSelected === -1) {
      console.log('No options selected');
      return;
    }
    //show more questions
    this.initialIndex = this.initialIndex + 2;    
  }

  backQuestion() {
    if(this.initialIndex <= 0) {
      console.log('nothing to do');
      return;
    }
    //show more questions
    this.initialIndex = this.initialIndex - 2;    
  }  
}
