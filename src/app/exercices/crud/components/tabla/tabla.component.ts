import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../interfaces/interfaces';
import { JsonServerService } from '../../services/json-server.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [
  ]
})
export class TablaComponent implements OnInit {

  usuarios!: Usuario[];


  constructor(private jss: JsonServerService ) { }

  ngOnInit(): void {
    this.jss.getUsersList().subscribe(usuarios => this.usuarios = usuarios);
    console.log(this.usuarios);
    
  }

}
