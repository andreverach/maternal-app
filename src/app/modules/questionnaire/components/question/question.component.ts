import { Component, Input, OnInit } from '@angular/core';
import { distinctUntilChanged } from 'rxjs';
import { ResponseService } from 'src/app/core/services/response.service';
import { QuestionnaireDto } from 'src/app/shared/interfaces/questionnaire';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  selectedOption: string = "";
  _question! : QuestionnaireDto;
  @Input() set setQuestion (_qq: QuestionnaireDto) {
    if(_qq) {      
      this._question = _qq;
      this.responseService.getCurrentQuestionnaire
      .subscribe(data => {
        if(data) {
          const _question = data.find(item => item.title === this._question.title);
          if(_question && _question.answerSelected && _question.answerSelected >= 0) {
            console.log(`> titulo ${_question.title} con rpta ${_question.answerSelected}`);
            this.selectedOption = _question.answers[_question.answerSelected];
          }else {
            this.selectedOption = "";
          }
        } 
      })  
    }
  }
  constructor(
    private responseService: ResponseService
  ) { }

  ngOnInit(): void {
    //console.log("questionComponent", this._question);      
  }

  updateAnswer (index: number) {
    console.log(this._question, index)
    this.responseService.setCurrentquestionnaire(this._question, index);
  }

  trackByFn(index: number): number{
    return index;
  }  

}
