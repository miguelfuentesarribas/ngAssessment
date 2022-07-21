import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators, FormGroup } from '@angular/forms';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { CRUDComponent } from '../crud.component';
import { CrudControls } from '../components/formulario/formulario.component.config';

@Injectable({
  providedIn: 'root'
})
export class CrudFormService {

  private _CrudFormControls = CrudControls;

  public crudForm = this._fb.group({
    [this._CrudFormControls.ID]:   [0, [Validators.required]],
    [this._CrudFormControls.NOMBRE]: [ 'miguel', [Validators.required]],
    [this._CrudFormControls.PASSWORD]: [ '123456789', [Validators.required, Validators.minLength(8)]],
    [this._CrudFormControls.PASSWORD2]: [ '12345678', [Validators.required, Validators.minLength(8)]],
    [this._CrudFormControls.EMAIL]: [ 'miguel.example.com', [Validators.required]],
    [this._CrudFormControls.PAIS]: [ {name: 'UK'},[Validators.required]],
    [this._CrudFormControls.CHECK]: [ false, [Validators.required]],
    [this._CrudFormControls.CIUDAD]: [ 'jaen', [Validators.required]]
  } ,{
    validators: [this.sameField('password', 'password2')],
  }
  )
  
  constructor(private _fb: FormBuilder ) { }

  sameField( campo1: string, campo2: string ) {
    return (formGroup: AbstractControl): ValidationErrors | null => { 
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      const a = () =>{formGroup.get(campo2)?.setErrors({'noIguales': true}); return {'noIguales': true}}; 
      return pass1 !== pass2 ? a() : null
    }
  }
}
