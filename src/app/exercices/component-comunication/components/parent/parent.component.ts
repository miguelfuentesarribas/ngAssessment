import { Component, OnInit } from '@angular/core';
import { ParentChildService } from '../../services/parent-child.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ],
  styleUrls: [`./styles.css`]
})
export class ParentComponent implements OnInit {

  mensajeFinalPadre!: string;
  mensajeParaHijo!: String;
  
  parentMessageService = "Parent using service";
  parentMessageInput = "Parent using input property";
  parentMessageObserbable = "Parent using Observable";


  //input 
  inputProperty() {
    this.mensajeParaHijo = new String (this.parentMessageInput);
  }

  //output
  SendToParent(event: string) {
    this.mensajeFinalPadre = event;
  }
  

  // service
  constructor(private pcs: ParentChildService) {
    this.pcs.classParent = this;
  }
  
  useObservable() {
    this.pcs.menssageForChild.next(this.parentMessageObserbable);
  }

  ngOnInit(): void {
    this.pcs.menssageForParent.subscribe(resp => this.mensajeFinalPadre = resp);
  }
  
  
  // servicio puro
  usePureService() {
    this.pcs.classChild.messageForChild = this.parentMessageService;
  }

}
