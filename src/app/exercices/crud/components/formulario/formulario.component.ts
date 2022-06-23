import { Component, OnInit } from '@angular/core';
import { City } from 'src/app/interfaces/interfaces';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: [
  ]
})
export class FormularioComponent implements OnInit {
  cities: City[];

  selectedCity!: City;

  constructor() {
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

}
