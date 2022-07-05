import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ExternalLIbraryComponent } from './external-library.component';
import { PrimeModule } from '../../prime/prime.module';



@NgModule({
  declarations: [
    ExternalLIbraryComponent
  ],
  imports: [
    PrimeModule,
    CommonModule,
    NgChartsModule
  ]
})
export class ExternalLibraryModule { }
