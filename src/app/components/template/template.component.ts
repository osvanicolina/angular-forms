import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent{
  user: Object = {
    first_name: "Osvani",
    last_name: "Colina",
    email: ""
  }
  constructor() { }

  save(form: NgForm){
    console.log('ngForm: ',form);
    console.log('Value', form.value);
    console.log("User", this.user);
  }
  
}
