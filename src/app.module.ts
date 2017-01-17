import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent, LoginFormComponent } from './components';

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, LoginFormComponent ],
  imports: [ BrowserModule, FormsModule, ReactiveFormsModule ]
})
export class AppModule {}