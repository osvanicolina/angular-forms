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
      'first_name': new FormControl('Osvani', Validators.required),
      'last_name': new FormControl('', Validators.required),
      'email': new FormControl('', [
                                    Validators.required, 
                                    Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
                                  ])
    });
  
  }
  
  save(){
    console.log(this.form.value);
  }
}
