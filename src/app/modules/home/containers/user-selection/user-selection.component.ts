import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.scss']
})
export class UserSelectionComponent implements OnInit {

  form!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router
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
    const data = {
      language,
      name: this.controlNameField?.value
    };
    console.log(data)
    if(data.language === 'Español') {
      console.log('use spanish language');
    } else {
      console.log('use english language');
    }
    this.router.navigateByUrl('/questionnaire');
    //this.router.navigateByUrl('/path-to-next-component');
  }
}
