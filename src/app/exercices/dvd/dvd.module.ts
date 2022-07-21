import { NgModule } from '@angular/core';
import { DvdComponent } from './dvd.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PrimeModule } from '../../prime/prime.module';



@NgModule({
  declarations: [
    DvdComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    PrimeModule
  ]
})
export class DvdModule { }
