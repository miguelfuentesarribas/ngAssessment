import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { ParentChildService } from '../../services/parent-child.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
  styleUrls: [`./styles.css`]
})
export class ChildComponent implements OnInit {
  //variables
 

  childMessageService = "Child using service";
  childMessageInput = "Child using output event";
  childMessageObserbable = "Child using subject";


  //input
  @Input() messageForChild: string = '';


  //output
  @Output() mesajeForParent = new EventEmitter<string>();

  outputEvent() {
    this.mesajeForParent.emit(this.childMessageInput);
  }


  //service
  constructor(private pcs: ParentChildService) {
    this.pcs.claseHijo = this;
  }

  
  useObservable() {
    this.pcs.menssageForParent.next(this.childMessageObserbable);  
  }

  ngOnInit(): void {
    this.pcs.menssageForChild.subscribe(resp => this.messageForChild = resp);
  }

 // servicio puro
  usePureService () {
    this.pcs.clasePadre.mensajeFinalPadre = this.childMessageService;
  }

}
