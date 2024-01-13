import { Component, OnInit } from '@angular/core';
import { ResponseService } from 'src/app/core/services/response.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    private responseService: ResponseService
  ) { }

  ngOnInit(): void {
    this.responseService.getSpanishResponse().subscribe(response => {
      console.log(response);
    })
  }

}
