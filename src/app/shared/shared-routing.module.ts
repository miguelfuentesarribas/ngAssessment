import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';

const routes: Routes = [
  {
    path: 'exercices',
    children: [
      {
        path: '',
        component: SidebarComponent 
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'exercices'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharedRoutingModule { }
