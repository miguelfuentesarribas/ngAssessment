import { Component, OnInit } from '@angular/core';
import { HandlerService } from '../../services/handler.service';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  onOff: boolean = false;
  color:string = 'red';

  constructor(private hs: HandlerService) {
    this.hs.classSemaforo = this;
   }

  ngOnInit(): void {
  }

}

//
//
// añadir ngclass semaforo component
//
//