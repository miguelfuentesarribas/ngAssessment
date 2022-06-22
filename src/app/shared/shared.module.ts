import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';
import { PrimeModule } from '../prime/prime.module';


@NgModule({
  declarations: [
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    PrimeModule,
  ],
  exports:[
    SidebarComponent
  ]
})
export class SharedModule { }
