import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DisplayHideComponent } from './display-hide.component';
import { PrimeModule } from '../../prime/prime.module';



@NgModule({
  declarations: [
    DisplayHideComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PrimeModule
  ]
})
export class DisplayHideModule { }
