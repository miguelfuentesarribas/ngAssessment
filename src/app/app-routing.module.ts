import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayHideComponent } from './exercices/display-hide/display-hide.component';
import { CRUDComponent } from './exercices/crud/crud.component';
import { LightSwitchComponent } from './exercices/light-switch/light-switch.component';
import { ParentComponent } from './exercices/component-comunication/components/parent/parent.component';
import { ExternalLIbraryComponent } from './exercices/external-library/external-library.component';

const routes: Routes = [
  {
    path: 'display_hide',
    component: DisplayHideComponent
  },
  {
    path: 'component_comunication',
    component: ParentComponent
  },
  {
    path: 'CRUD',
    component: CRUDComponent
  },
  {
    path: 'light_switch',
    component: LightSwitchComponent
  },
  {
    path: 'external_library',
    component: ExternalLIbraryComponent
  },
  {
    path: '**',
    redirectTo: 'component_comunication'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
