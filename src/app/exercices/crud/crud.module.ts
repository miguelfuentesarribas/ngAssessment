import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDComponent } from '../crud/crud.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';



@NgModule({
  declarations: [
    CRUDComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CRUDModule { }
