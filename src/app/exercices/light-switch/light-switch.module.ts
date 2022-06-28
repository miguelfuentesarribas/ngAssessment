import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemaforoComponent } from './components/semaforo/semaforo.component';
import { ControllerComponent } from './components/controller/controller.component';
import { LightSwitchComponent } from './light-switch.component';



@NgModule({
  declarations: [
    SemaforoComponent,
    ControllerComponent,
    LightSwitchComponent
  ],
  imports: [
    CommonModule
  ],

})
export class LightSwitchModule { }
