import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{
  
  form: FormGroup;
  usuario: Object = {
    name: { 
      first_name: 'Osvani',
      last_name: 'COlina'
    },
    email: 'osvacolijim@gmail.com'
  }

  constructor() { 

    this.form = new FormGroup({
      'name': new FormGroup({
        'first_name': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'last_name': new FormControl('', Validators.required),
      }),
      'email': new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])
    });
  
  }
  
  save(){
    console.log(this.form);
  }
}
