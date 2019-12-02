import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';



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
    email: 'osvacolijim@gmail.com',
    hobbies: ['Jugar', 'Ver series', 'Dormir']
  }

  constructor() { 

    this.form = new FormGroup({
      'name': new FormGroup({
        'first_name': new FormControl('', [Validators.required,Validators.minLength(3)]),
        'last_name': new FormControl('', [Validators.required, this.noColina]),
      }),
      'email': new FormControl('', [Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      'hobbies': new FormArray([
                  new FormControl('Correr', Validators.required)
                ]),
      'username': new FormControl('', Validators.required, this.existUser),
      'password1': new FormControl('', Validators.required),
      'password2': new FormControl()
    });
    

    //this.form.setValue( this.user );
    this.form.controls['password2'].setValidators([
      Validators.required,
      this.noEqual.bind( this.form )
    ]);

    this.form.controls['username'].valueChanges
      .subscribe( data => {
        console.log(data);
      });
    
    this.form.controls['username'].statusChanges
      .subscribe( data => {
        console.log(data);
      });
  }
  
  addHobby(){
    (this.form.controls['hobbies'] as FormArray).push(
      new FormControl('', Validators.required)
    );
  }

  noColina(control: FormControl): {[s: string]: boolean}{
    if(control.value === "colina"){
      return {
        noColina: true
      }
    }else{
      return null;
    }
  }

  noEqual(control: FormControl): {[s: string]: boolean}{
    //This = form
    let form:any = this;
    if(control.value !== form.controls['password1'].value){
      return {
        noequal: true
      }
    }else{
      return null;
    }
  }

  existUser( control: FormControl): Promise<any>|Observable<any>{
    let promise = new Promise(
      (resolve, reject) =>{
        setTimeout( ()=>{
          if(control.value === "strider"){
            resolve({
              existuser:true
            });
          }else{
            resolve(null)
          }
        },3000);    
      }
    )

    return promise;
  }

  save(){
    console.log(this.form);
    //this.form.reset();//Can be reset() and reset the values anyways*/
  }
}
