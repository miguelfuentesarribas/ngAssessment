import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Exercise } from '../../interfaces/interfaces';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.css'],
})
export class SidebarComponent implements OnInit {

  display: boolean = false;
  items!: MenuItem[];

  constructor() {
    
  }

  ngOnInit(): void {
    this.items = [{
      label: 'EJERCICIOS',
      items:[
        {label: "Display Hide", disabled: false, routerLink: ['/display_hide']},
        {label: "Component Comunication", disabled: false, routerLink: ['/component_comunication']},
        {label: "CRUD", disabled: false, routerLink: ['CRUD']},
        {label: "Search on Type", disabled: true},
        {label: "Lightswitch", disabled: false, routerLink: ['/light_switch']},
        {label: "External Library", disabled: false, routerLink: ['/external_library']},
        {label: "DVD", disabled: false, routerLink: ['/dvd']},
        {label: "Counter", disabled: true},
      ]
    }]
  }

  openClose() {
    this.display = !this.display; 
  }

  goToLink(url: string){
    window.open(url, "_blank");
  }

  met(url: string) {
    console.log(url);
    
  }
}
