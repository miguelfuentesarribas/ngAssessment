import { Injectable } from '@angular/core';
import { AbstractControl, FormBuilder, ValidationErrors, Validators, FormGroup } from '@angular/forms';
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
    [this._CrudFormControls.PASSWORD2]: [ '123456789', [Validators.required, Validators.minLength(8)]],
    [this._CrudFormControls.EMAIL]: [ 'miguel.example.com', [Validators.required]],
    [this._CrudFormControls.PAIS]: [ {name: ''},[Validators.required]],
    [this._CrudFormControls.CHECK]: [ false, [Validators.required]],
    [this._CrudFormControls.CIUDAD]: [ 'jaen', [Validators.required]]
  } ,{
    validators: [
      this.sameField('password', 'password2'),
      this.countryEmpty('pais')          
    ],
  }
  )
  
  constructor(private _fb: FormBuilder ) { }

  sameField( campo1: string, campo2: string ) {
    return (formGroup: AbstractControl): ValidationErrors | null => { 
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      const error = () =>{formGroup.get(campo2)?.setErrors({'noIguales': true}); 
        return {'noIguales': true};
      }; 
      return pass1 !== pass2 ? error() : null;
    }
  }

  countryEmpty(field1: string) {
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const country = formGroup.get(field1)?.value;

      const error = () =>{formGroup.get(field1)?.setErrors({'paisVacio': true})
        return {'paisVacio': true};
      };
      
      return country?.name === '' || country?.name === '--'  ? error() : null;
    }
  }
}
