import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Light } from 'src/app/interfaces/interfaces';
import { HandlerService } from '../../services/handler.service';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})

export class ControllerComponent implements OnInit {

  onOff: boolean = false;

  lights!: Light[];

  formLight: FormGroup = this.fb.group({
    selector: ['red', [Validators.required]],
    onOff: [ false, [Validators.required]]
  })

  constructor(private fb: FormBuilder,
              private hs: HandlerService) {
      this.lights = [
        {color: 'red'},
        {color: 'yellow'},
        {color: 'green'},
      ]
   }

  ngOnInit(): void {
  }

  changeState(event: any) {
    
    if(event.checked !== undefined) {
      this.onOff = event.checked;
      this.hs.classSemaforo.onOff = event.checked;
    } else {
      this.hs.classSemaforo.color = event.value.color; 
    }
    
  }
}
