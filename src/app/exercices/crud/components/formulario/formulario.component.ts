import { Component, OnInit } from '@angular/core';
import { FormBuilder,  FormGroup,  Validators } from '@angular/forms';
import { Country } from 'src/app/interfaces/interfaces';
import { BrothersService } from '../../services/brothers.service';
import { Usuario } from '../../../../interfaces/interfaces';
import { JsonServerService } from '../../services/json-server.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: [
    `./formulario.component.css`
  ]
})
export class FormularioComponent implements OnInit {

  formularioCRUD: FormGroup = this.fb.group({
    id: ['',[]],
    nombre: ['Miguel', [Validators.required]],
    password: ['12345678', [Validators.required, Validators.minLength(6)]],
    password2: ['12345678', [Validators.required]],
    email: ['miguel@ejemplo.com', [Validators.required]],
    pais: ['', [Validators.required]],
    check: [true, [Validators.required]],
    ciudad: ['jaen', [Validators.required]]
  })

  country: Country[];

  selectedCountry!: Country;

  checked: boolean = false;

  update: boolean = false;

  usuario!: Usuario;

  constructor( private fb: FormBuilder,
                private bs: BrothersService,
                private jss: JsonServerService) {
    this.bs.classFormulario = this;

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
    this.bs.getClickEventUpdate().subscribe(({id, nombre, password, email, check, pais, ciudad}) => {
      console.log(pais);
      
      this.formularioCRUD.patchValue({
        id,
        nombre,
        password,
        password2: password,
        email,
        pais: {name: pais},
        check,
        ciudad
      })
    })
    
  }

  enviarForm() {
    //console.log(this.formularioCRUD.controls);
    let nombre = this.formularioCRUD.controls['nombre'].value;
    let password = this.formularioCRUD.controls['password'].value;
    let email = this.formularioCRUD.controls['email'].value;
    let check = this.formularioCRUD.controls['check'].value;
    let pais = this.formularioCRUD.controls['pais'].value.name;
    let ciudad = this.formularioCRUD.controls['ciudad'].value;

    this.usuario = {
      nombre,
      password,
      email,
      check,
      pais,
      ciudad
    } 

    this.jss.postUser(this.usuario).subscribe(response => {
                                             console.log(response)
                                             this.jss.sendClick();
                                            });
    
    this.formularioCRUD.markAllAsTouched();
    return;
  }

  passwordMatch(pass1: string, pass2: string) {
    return !(this.formularioCRUD.get(pass1)?.value === this.formularioCRUD.get(pass2)?.value)
  }

  enableButton() {
    return !this.formularioCRUD.valid;
  }

  putUser() {
    let id = this.formularioCRUD.controls['id'].value
    let nombre = this.formularioCRUD.controls['nombre'].value;
    let password = this.formularioCRUD.controls['password'].value;
    let email = this.formularioCRUD.controls['email'].value;
    let check = this.formularioCRUD.controls['check'].value;
    let pais = this.formularioCRUD.controls['pais'].value.name;
    let ciudad = this.formularioCRUD.controls['ciudad'].value;

    this.usuario = {
      id,
      nombre,
      password,
      email,
      check,
      pais,
      ciudad
    } 

    this.jss.putUser(this.usuario).subscribe(response => {
      console.log(response)
      this.jss.sendClick();
     });
  }
}
