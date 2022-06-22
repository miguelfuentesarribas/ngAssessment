import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

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
  @Input() MessageForChild: string = '';


  //output
  @Output() mesajeForParent = new EventEmitter<string>();
  
  outputEvent() {
    this.mesajeForParent.emit(this.childMessageInput);
  }

  constructor() { }

  ngOnInit(): void {
  }


}
