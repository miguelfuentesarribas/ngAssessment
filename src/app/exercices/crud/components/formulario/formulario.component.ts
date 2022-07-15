import { Component, OnInit } from '@angular/core';
import { Country } from 'src/app/interfaces/interfaces';
import { BrothersService } from '../../services/brothers.service';
import { Usuario } from '../../../../interfaces/interfaces';
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

  usuario!: Usuario;

  constructor(  private _bs : BrothersService,
                private _jss: JsonServerService,
                private _cfs: CrudFormService) {
    this._bs.classFormulario = this;

    this.country = [
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
      //console.log(pais);
      
      this.crudForm.patchValue({
        id,
        nombre,
        password,
        password2: password,
        email,
        //pais: {name: pais},
        check,
        ciudad
      })
    })
    
  }

  enviarForm() {
    // //console.log(this.formularioCRUD.controls);
    // let nombre = this.formularioCRUD.controls['nombre'].value;
    // let password = this.formularioCRUD.controls['password'].value;
    // let email = this.formularioCRUD.controls['email'].value;
    // let check = this.formularioCRUD.controls['check'].value;
    // let pais = this.formularioCRUD.controls['pais'].value.name;
    // let ciudad = this.formularioCRUD.controls['ciudad'].value;

    // this.usuario = {
    //   nombre,
    //   password,
    //   email,
    //   check,
    //   pais,
    //   ciudad
    // } 

    // this._jss.postUser(this.usuario).subscribe(response => {
    //                                          console.log(response)
    //                                          this._jss.sendClick();
    //                                         });
    
    // this.formularioCRUD.markAllAsTouched();
    // return;
  }

  passwordMatch(pass1: string, pass2: string) {
    // return !(this.formularioCRUD.get(pass1)?.value === this.formularioCRUD.get(pass2)?.value)
  }

  enableButton() {
    // return !this.formularioCRUD.valid;
  }

  putUser() {
    // let id = this.formularioCRUD.controls['id'].value
    // let nombre = this.formularioCRUD.controls['nombre'].value;
    // let password = this.formularioCRUD.controls['password'].value;
    // let email = this.formularioCRUD.controls['email'].value;
    // let check = this.formularioCRUD.controls['check'].value;
    // let pais = this.formularioCRUD.controls['pais'].value.name;
    // let ciudad = this.formularioCRUD.controls['ciudad'].value;

    // this.usuario = {
    //   id,
    //   nombre,
    //   password,
    //   email,
    //   check,
    //   pais,
    //   ciudad
    // } 

    // this._jss.putUser(this.usuario).subscribe(response => {
    //   console.log(response)
    //   this._jss.sendClick();
    //  });
  }
}
