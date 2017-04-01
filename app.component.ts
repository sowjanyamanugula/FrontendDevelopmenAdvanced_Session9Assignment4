import { Component } from '@angular/core';
import {MyDirective} from './mydirective.directive';

@Component({
  selector: 'my-app',
  template: ` <div my-directive>{{pageTitle}}
               
    </div>`,
    
})
export class AppComponent  {
   pageTitle : string = `Session 9 Assignment 4`; 
   
  }



