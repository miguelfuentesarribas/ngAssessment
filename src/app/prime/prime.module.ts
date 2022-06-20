import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import {SidebarModule} from 'primeng/sidebar';




@NgModule({
  exports: [
    ButtonModule,
    SidebarModule
  ]
})
export class PrimeModule { }
