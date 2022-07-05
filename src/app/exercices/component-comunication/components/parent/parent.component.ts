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
  mensajeParaHijo!: string;
  
  parentMessageService = "Parent using service";
  parentMessageInput = "Parent using input property";
  parentMessageInput2 = "Parent using input property ";
  parentMessageObserbable = "Parent using Observable";

  index: number = 0;

  //input 
  inputProperty() {
    if (this.mensajeParaHijo == this.parentMessageInput){
      this.mensajeParaHijo = this.parentMessageInput2;
    } else {
      this.mensajeParaHijo = this.parentMessageInput;
    }
  }

  //output
  SendToParent(event: any) {
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
