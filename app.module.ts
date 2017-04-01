import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import {MyDirective} from './mydirective.directive';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,MyDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
