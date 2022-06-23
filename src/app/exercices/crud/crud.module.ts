import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CRUDComponent } from '../crud/crud.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaComponent } from './components/tabla/tabla.component';
import { PrimeModule } from '../../prime/prime.module';



@NgModule({
  declarations: [
    CRUDComponent,
    FormularioComponent,
    TablaComponent
  ],
  imports: [
    CommonModule,
    PrimeModule
  ]
})
export class CRUDModule { }
