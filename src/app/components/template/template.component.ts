import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
    .ng-invalid.ng-touched:not(form){
      border: 1px solid red;
    }
  `]
})
export class TemplateComponent{
  user: Object = {
    first_name: null,
    last_name: null,
    email: null
  }
  constructor() { }

  save(form: NgForm){
    console.log('ngForm: ',form);
    console.log('Value', form.value);
    console.log("User", this.user);
  }
  
}
