import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { DisplayHideModule } from './exercices/display-hide/display-hide.module';
import { ComponentComunicationModule } from './exercices/component-comunication/component-comunication.module';
import { ParentChildService } from './exercices/component-comunication/services/parent-child.service';
import { CRUDModule } from './exercices/crud/crud.module';
import { HttpClientModule } from '@angular/common/http';
import { LightSwitchModule } from './exercices/light-switch/light-switch.module';
import { ExternalLibraryModule } from './exercices/external-library/external-library.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ComponentComunicationModule,
    CRUDModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    DisplayHideModule,
    HttpClientModule,
    LightSwitchModule,
    ExternalLibraryModule
  ],
  providers: [ParentChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
