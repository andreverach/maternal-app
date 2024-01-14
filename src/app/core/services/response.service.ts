import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { QuestionnaireDto } from 'src/app/shared/interfaces/questionnaire';
import { dataResponseC, dataUserSelected, questionListEnglish, questionListSpanish } from 'src/app/shared/constants/list';
import { UserDataSelected } from 'src/app/shared/interfaces/user.data';
@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  private questionnaireList$: BehaviorSubject<QuestionnaireDto[]> = 
    new BehaviorSubject<QuestionnaireDto[]>(questionListEnglish);
  private questionnaireList!: QuestionnaireDto[];

  private userData$: BehaviorSubject<UserDataSelected> = 
    new BehaviorSubject<UserDataSelected>(dataUserSelected);
  private userData!: UserDataSelected;

  constructor(
    private httpClient: HttpClient,
  ) { }

  get getCurrentQuestionnaire(){
    return this.questionnaireList$.asObservable();
  }

  setCurrentquestionnaire(question: QuestionnaireDto, index: number) {
    const currentList = this.userData.language === 'English' ? questionListEnglish: questionListSpanish;
    this.resetCurrentQuestionnaire();
    const indexFound = currentList.findIndex(item => item.title === question.title)
    currentList[indexFound].answerSelected = index;
    this.questionnaireList = currentList;
    this.questionnaireList$.next(currentList);
  }

  resetCurrentQuestionnaire(){
    const resetQuestionnaire: QuestionnaireDto[] = this.questionnaireList;
    this.questionnaireList$.next(resetQuestionnaire);
  }

  get getCurrentUserSelection(){
    return this.userData$.asObservable();
  }

  setCurrentUserSelection(question: UserDataSelected){
    this.resetCurrentUserSelection();    
    this.userData = question;
    this.userData$.next(question);
    //
    const currentList = question.language === 'English' ? questionListEnglish: questionListSpanish;
    this.resetCurrentQuestionnaire();
    this.questionnaireList = currentList;
    this.questionnaireList$.next(currentList);
  }

  resetCurrentUserSelection(){
    const resetQuestionnaire: UserDataSelected = dataUserSelected;
    this.userData$.next(resetQuestionnaire);
  }

  getEnglishResponse(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': '0trQCMsfOuGMb1Mk4ZL92FXrxYr1ZjW8Xnz2TjQ5',
    });
    return this.httpClient.get('http://api.dev.maternal.app/user/evaluation/dass-21/results?use rID=964f6c4e-930e-407c-8d50-c1505ee65fc4&lang=en_us', { headers });
  }
  getSpanishResponse(): Observable<any> {
    const headers = new HttpHeaders({
      'x-api-key': '0trQCMsfOuGMb1Mk4ZL92FXrxYr1ZjW8Xnz2TjQ5',
    });
    return this.httpClient.get('http://api.dev.maternal.app/user/evaluation/dass-21/results?use rID=964f6c4e-930e-407c-8d50-c1505ee65fc4&lang=es_es', { headers });
  }

  getLocalResponse(): Observable<any> {    
    return of(dataResponseC);
  }
}
