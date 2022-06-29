import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {

  //observable
  menssageForParent: Subject<string> = new Subject<string>();
  menssageForChild: Subject<string> = new Subject<string>();
  

  // servicio puro
  classChild!: ChildComponent;
  classParent!: ParentComponent;

  
  constructor() { }

}
