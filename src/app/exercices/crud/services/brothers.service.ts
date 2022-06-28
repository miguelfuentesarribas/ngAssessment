import { Injectable } from '@angular/core';
import { TablaComponent } from '../components/tabla/tabla.component';
import { FormularioComponent } from '../components/formulario/formulario.component';
import { Usuario } from '../../../interfaces/interfaces';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BrothersService {

  classTabla!: TablaComponent;
  classFormulario!: FormularioComponent;

  private subject = new Subject<Usuario>();

  constructor() { }

  setUserToUpdate(user: Usuario) {
    this.subject.next(user) 
  }

  getClickEventUpdate() {
    return this.subject.asObservable();
  }
}
