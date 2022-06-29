import { Injectable } from '@angular/core';
import { SemaforoComponent } from '../components/semaforo/semaforo.component';

@Injectable({
  providedIn: 'root'
})
export class HandlerService {

  constructor() { }

  classSemaforo!: SemaforoComponent;
}
