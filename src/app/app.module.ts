import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimeModule } from './prime/prime.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DisplayHideModule } from './exercices/display-hide/display-hide.module';
import { LightSwitchComponent } from './exercices/light-switch/light-switch.component';
import { ExternallibraryComponent } from './exercices/externallibrary/externallibrary.component';

@NgModule({
  declarations: [
    AppComponent,
    LightSwitchComponent,
    ExternallibraryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    PrimeModule,
    SharedModule,
    DisplayHideModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
