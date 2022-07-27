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
  private _subject = new Subject<ICrudUserForm>();

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

  constructor() { }

  setUserToUpdate(user: ICrudUserForm) {
    this._subject.next(user) 
  }

  getClickEventUpdate() {
    return this._subject.asObservable();
  }
}