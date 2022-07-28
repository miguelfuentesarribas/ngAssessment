import { Injectable } from '@angular/core';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { Subject } from 'rxjs';
import { ICrudUserForm } from '../models/CRUD-form.model';

@Injectable({
  providedIn: 'root'
})
export class BrothersService {
  
  private _classFormulario!: FormularioComponent;
  subject = new Subject<ICrudUserForm>();

  public get classFormulario(): FormularioComponent {
    return this._classFormulario;
  }
  
  public set classFormulario(value: FormularioComponent) {
    this._classFormulario = value;
  }

  constructor() { }

}