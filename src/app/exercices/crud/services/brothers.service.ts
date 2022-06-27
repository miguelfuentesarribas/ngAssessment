import { Injectable } from '@angular/core';
import { TablaComponent } from '../components/tabla/tabla.component';
import { FormularioComponent } from '../components/formulario/formulario.component';

@Injectable({
  providedIn: 'root'
})
export class BrothersService {

  classTabla!: TablaComponent;
  classFormulario!: FormularioComponent;

  constructor() { }
}
