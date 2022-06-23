import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {DividerModule} from 'primeng/divider';
import {ListboxModule} from 'primeng/listbox';
import {FieldsetModule} from 'primeng/fieldset';



@NgModule({
  exports: [
    ButtonModule,
    SidebarModule,
    MenuModule,
    DividerModule,
    ListboxModule,
    FieldsetModule   
  ]
})
export class PrimeModule { }
