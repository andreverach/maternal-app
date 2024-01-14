import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/core/services/response.service';
import { ResponseDto } from 'src/app/shared/interfaces/response';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  resultInfo!: ResponseDto;
  constructor(
    private responseService: ResponseService
  ) { }

  ngOnInit(): void {
    /* this.responseService.getSpanishResponse().subscribe(response => {
      console.log(response);
    }) */
    this.responseService.getLocalResponse().subscribe(data => {
      console.log(data);
      this.resultInfo = data;
    })
  }

}
