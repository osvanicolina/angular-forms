import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent{
  
  form: FormGroup;
  user: Object = {
    name: { 
      first_name: 'Osvani',
      last_name: 'Colina'
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
    

    this.form.setValue( this.user );
  }
  
  save(){
    console.log(this.form);
    this.form.reset({
      name:{
        first_name: '',
        last_name: ''
      },
      email: ''
    });//Can be reset() and reset the values anyways
  }
}
