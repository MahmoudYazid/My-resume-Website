import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';

import { Part1Component } from './part1/part1.component';
import { Part2Component } from './part2/part2.component';
import { Part3Component } from './part3/part3.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Part4Component } from './part4/part4.component';
import { Part5Component } from './part5/part5.component';
import { Part6Component } from './part6/part6.component';
import { Part7Component } from './part7/part7.component';

@NgModule({
  declarations: [
    AppComponent,
   
    Part1Component,
    Part2Component,
    Part3Component,
    Part4Component,
    Part5Component,
    Part6Component,
    Part7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
