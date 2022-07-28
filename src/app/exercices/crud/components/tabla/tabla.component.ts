import { Component, OnInit } from '@angular/core';
import { JsonServerService } from '../../services/json-server.service';
import { BrothersService } from '../../services/brothers.service';
import { Subscription } from 'rxjs';
import { ICrudUserForm } from '../../models/CRUD-form.model';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styles: [`
  .update{
    padding: 14%;
  }
  .update:hover{
    background-color: var(--blue-600);
    padding: 14%;
    border-radius: 50%;
    cursor: pointer;
  }
  .delete{
    padding: 14%;
  }
  .delete:hover{
    background-color: var(--red-600);
    padding: 14%;
    cursor: pointer;
    border-radius: 50%;
  }
  .actions{
    width: 130px;
  }
  `]
})

export class TablaComponent implements OnInit {

  usuarios!: ICrudUserForm[];
  update: boolean = false;
  subscription: Subscription;

  constructor(private jss: JsonServerService,
              private bs: BrothersService) {
                this.subscription = this.jss.getClickEvent().subscribe(() => this.ngOnInit())
              }

  ngOnInit(): void {
    this.jss.getUsersList().subscribe(usuarios => {this.usuarios = usuarios});    
  }

  delete(usuario: ICrudUserForm) {
    this.jss.DelUser(usuario.id!).subscribe(() => this.ngOnInit());
  }

  uptate(usuario: ICrudUserForm) {
    this.bs.subject.next(usuario)
    this.bs.classFormulario.update === false ? this.bs.classFormulario.update = !this.bs.classFormulario.update : null;
  }
}