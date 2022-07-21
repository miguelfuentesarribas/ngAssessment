import { Injectable } from '@angular/core';
import { TablaComponent } from '../components/tabla/tabla.component';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { Subject } from 'rxjs';
import { ICrudUserForm } from '../models/CRUD-form.model';

@Injectable({
  providedIn: 'root'
})
export class BrothersService {
  
  private _classTabla!: TablaComponent;
  private _classFormulario!: FormularioComponent;

  public get classFormulario(): FormularioComponent {
    return this._classFormulario;
  }
  
  public set classFormulario(value: FormularioComponent) {
    this._classFormulario = value;
  }
  
  public get classTabla(): TablaComponent {
    return this._classTabla;
  }

  public set classTabla(value: TablaComponent) {
    this._classTabla = value;
  }

  private subject = new Subject<ICrudUserForm>();

  constructor() { }

  setUserToUpdate(user: ICrudUserForm) {
    this.subject.next(user) 
  }

  getClickEventUpdate() {
    return this.subject.asObservable();
  }
}
