import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{
  
  form: FormGroup;

  constructor() { 

    this.form = new FormGroup({
      'first_name': new FormControl('Osvani'),
      'last_name': new FormControl(),
      'email': new FormControl()
    });
  
  }
  
  save(){
    console.log(this.form.value);
  }
}
