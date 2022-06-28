import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../../../interfaces/interfaces';
import { JsonServerService } from '../../services/json-server.service';
import { BrothersService } from '../../services/brothers.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
  .update:hover{
    background-color: var(--blue-600);
    border-radius: 50%;
  }
  .delete:hover{
    background-color: var(--red-600);
    border-radius: 50%;
  }
  `]
})
export class TablaComponent implements OnInit {

  usuarios!: Usuario[];
  
  update: boolean = false;

  subscription: Subscription;

  constructor(private jss: JsonServerService,
              private bs: BrothersService) { 
                this.bs.classTabla = this;

                this.subscription = this.jss.getClickEventDelete().subscribe(() => this.ngOnInit())
              }

  ngOnInit(): void {
    this.jss.getUsersList().subscribe(usuarios => {this.usuarios = usuarios});
    
  }


  delete(usuario: Usuario) {
    this.jss.DelUser(usuario.id!).subscribe(() => this.ngOnInit());
  }

  uptate(usuario: Usuario) {
    
    this.bs.setUserToUpdate(usuario)
    console.log(usuario);
    
    
    if (this.bs.classFormulario.update === false) {
      this.bs.classFormulario.update = !this.bs.classFormulario.update
    }
  }

}
