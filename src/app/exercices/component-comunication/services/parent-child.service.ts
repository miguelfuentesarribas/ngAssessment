import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ParentComponent } from '../components/parent/parent.component';
import { ChildComponent } from '../components/child/child.component';

@Injectable({
  providedIn: 'root'
})
export class ParentChildService {

  get classChild(): ChildComponent {
    return this._classChild;
  }

  set classChild(value: ChildComponent) {
    this._classChild = value;
  }

  get classParent(): ParentComponent {
    return this._classParent;
  }

  set classParent(value: ParentComponent) {
    this._classParent = value;
  }

  //observable
  menssageForParent: Subject<string> = new Subject<string>();
  menssageForChild: Subject<string> = new Subject<string>();
  

  // servicio puro
  private _classChild!: ChildComponent;
  private _classParent!: ParentComponent;
  
}
