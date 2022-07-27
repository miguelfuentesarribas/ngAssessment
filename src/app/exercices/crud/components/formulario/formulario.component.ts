import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/interfaces';
import { BrothersService } from '../../services/brothers.service';
import { JsonServerService } from '../../services/json-server.service';
import { CrudFormService } from '../../services/crud-form.service';
import { CrudControls } from './formulario.component.config';
import { ICrudUserForm } from '../../models/CRUD-form.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: [
    `./formulario.component.css`
  ]
})
export class FormularioComponent implements OnInit {

  crudForm = this._cfs.crudForm;
  crudControls = CrudControls;
  crudFormData!: ICrudUserForm;

  country: Country[];

  selectedCountry!: Country;

  checked: boolean = false;

  update: boolean = false;

  usuario!: ICrudUserForm;

  constructor(  private _bs : BrothersService,
                private _jss: JsonServerService,
                private _cfs: CrudFormService) {
    this._bs.classFormulario = this;

    this.country = [
      {name: '--'},
      {name: 'USA'},
      {name: 'Italy'},
      {name: 'UK'},
      {name: 'turkey'},
      {name: 'Francia'},
      {name: 'Germany'},
      {name: 'Spain'},
      {name: 'Japan'},
    ];
  }

  ngOnInit(): void {
    this._bs.getClickEventUpdate().subscribe(({id, nombre, password, email, pais, check, ciudad}) => {
      
      this.crudForm.patchValue({
        id,
        nombre,
        password,
        password2: password,
        email,
        pais: {name:pais},
        check,
        ciudad
      })
    })
  }

  enviarForm() {
    //console.log(this.crudForm.controls);
    let id = this.crudForm.controls['id'].value!;    
    let nombre = this.crudForm.controls['nombre'].value!;
    let password = this.crudForm.controls['password'].value!;
    let email = this.crudForm.controls['email'].value!;
    let check = this.crudForm.controls['check'].value!;
    let pais = this.crudForm.controls['pais'].value?.name!;
    let ciudad = this.crudForm.controls['ciudad'].value!;

    this.usuario = {
      id,
      nombre,
      password,
      password2: password,
      email,
      check,
      pais,
      ciudad
    } 

    this.usuario.id == 0 ?
    this._jss.postUser(this.usuario).subscribe(response => {this._jss.sendClick()}) : 
    this._jss.putUser(this.usuario).subscribe(response => {this._jss.sendClick()});
    
    this.crudForm.markAllAsTouched();
    return;
  }

  passwordMatch(pass1: string, pass2: string) {
    return !(this.crudForm.get(pass1)?.value === this.crudForm.get(pass2)?.value) 
  }

  enableButton() {
    return !this.crudForm.valid;
  }
}
