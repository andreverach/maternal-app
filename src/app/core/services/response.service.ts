import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ResponseService {

  constructor(
    private httpClient: HttpClient,
  ) { }

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
}
