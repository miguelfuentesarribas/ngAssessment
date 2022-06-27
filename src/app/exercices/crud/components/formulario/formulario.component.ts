import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {

  formularioCRUD: FormGroup = this.fb.group({
    nombre: ['miguel', [Validators.required]],
    password: ['12345678', [Validators.required]],
    password2: ['12345678', [Validators.required]],
    email: ['miguel@ejemplo.com', [Validators.required]],
    // pais: ['', []],
    check: [true, [Validators.required]],
    ciudad: ['jaen', [Validators.required]]
  })

  cities: City[];

  selectedCity!: City;

  checked: boolean = false;

  constructor( private fb: FormBuilder) {
      
    this.cities = [
      {name: 'New York'},
      {name: 'Rome'},
      {name: 'London'},
      {name: 'Istanbul'},
      {name: 'Paris'},
    ];
  }

  ngOnInit(): void {
    
    
  }

  enviarForm() {
    console.log(this.formularioCRUD);
    this.formularioCRUD.markAllAsTouched();
    
  }

}
