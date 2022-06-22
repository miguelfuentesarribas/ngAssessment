import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styles: [
  ],
  styleUrls: [`./styles.css`]
})
export class ParentComponent implements OnInit {

  mensajeFinalPadre: string = '';
  mensajeParaHijo: string = '';
  
  parentMessageService = "Parent using service";
  parentMessageInput = "Parent using input property";
  parentMessageObserbable = "Parent using Observable";

  

  constructor() { }

  ngOnInit(): void {
  }

  inputProperty() {
    this.mensajeParaHijo = this.parentMessageInput;
  }

  SendToParent(event: any) {
    console.log(event);
    
    this.mensajeFinalPadre = event
  }

}
