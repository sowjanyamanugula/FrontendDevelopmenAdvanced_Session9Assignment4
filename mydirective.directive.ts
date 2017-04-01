import {Directive,ElementRef} from '@angular/core';


@Directive({
  selector: '[my-directive]'
  
    
})
export class MyDirective  {
    constructor(private el:ElementRef){
        el.nativeElement.style.background='red';
    }
}