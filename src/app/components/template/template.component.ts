import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent{

  constructor() { }

  save(){
    console.log('Submit');
  }
  
}
