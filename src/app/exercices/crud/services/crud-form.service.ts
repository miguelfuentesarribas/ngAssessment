import { Injectable } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { CRUDComponent } from '../crud.component';
import { CrudControls } from '../components/formulario/formulario.component.config';

@Injectable({
  providedIn: 'root'
})
export class CrudFormService {

  private _CrudFormControls = CrudControls;

  public crudForm = this._fb.group({
    [this._CrudFormControls.ID]:   [0, [Validators.required],],
    [this._CrudFormControls.NOMBRE]: [ '', [Validators.required],],
    [this._CrudFormControls.PASSWORD]: [ '', [Validators.required],],
    [this._CrudFormControls.PASSWORD2]: [ '', [Validators.required],],
    [this._CrudFormControls.EMAIL]: [ '', [Validators.required],],
    [this._CrudFormControls.PAIS]: [ {name: 'hola'}, [Validators.required],],
    [this._CrudFormControls.CHECK]: [ false, [Validators.required],],
    [this._CrudFormControls.CIUDAD]: [ '', [Validators.required],]
  })
  country: any;

  constructor(private _fb: FormBuilder ) { }
}
