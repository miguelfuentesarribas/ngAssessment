import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button'
import {SidebarModule} from 'primeng/sidebar';
import {MenuModule} from 'primeng/menu';
import {DividerModule} from 'primeng/divider';
import {ListboxModule} from 'primeng/listbox';
import {FieldsetModule} from 'primeng/fieldset';
import {PasswordModule} from 'primeng/password';
import {CheckboxModule} from 'primeng/checkbox';
import {InputTextModule} from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import { CardModule} from 'primeng/card';


@NgModule({
  exports: [
    ButtonModule,
    SidebarModule,
    MenuModule,
    DividerModule,
    ListboxModule,
    FieldsetModule,
    PasswordModule,
    InputTextModule,
    CheckboxModule,
    FormsModule,
    TableModule,
    DropdownModule,
    CardModule,
    ButtonModule
  ]
})
export class PrimeModule { }
