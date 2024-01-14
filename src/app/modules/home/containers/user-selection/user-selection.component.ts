import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseService } from 'src/app/core/services/response.service';
import { languages } from 'src/app/shared/constants/list';
import { UserDataSelected } from 'src/app/shared/interfaces/user.data';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  form!: FormGroup;
  languageList: string[] = languages;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private responseService: ResponseService
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    
  }
  buildForm(){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
  }
  get controlNameField(){
    return this.form.get('name');
  }

  redirectTo(language: string) {
    const data: UserDataSelected = {
      language,
      name: this.controlNameField?.value
    };
    if(data.name === "") {
      return;
    }
    this.responseService.setCurrentUserSelection(data);
    /* console.log(data)
    if(data.language === languages[0]) {
      console.log('use spanish language');
    } else {
      console.log('use english language');
    } */
    this.router.navigateByUrl('/questionnaire');
    //this.router.navigateByUrl('/path-to-next-component');
  }
}
