import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SemaforoComponent } from './components/semaforo/semaforo.component';
import { ControllerComponent } from './components/controller/controller.component';
import { LightSwitchComponent } from './light-switch.component';
import { PrimeModule } from '../../prime/prime.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SemaforoComponent,
    ControllerComponent,
    LightSwitchComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    ReactiveFormsModule
  ],

})
export class LightSwitchModule { }
