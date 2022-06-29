import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-hide',
  templateUrl: './display-hide.component.html',
  styles: [],
  styleUrls: ['./styles.css'],
})
export class DisplayHideComponent implements OnInit {

  show: boolean = false;
  showExt: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  updateState() {
    this.show = !this.show;
  }

  updateSpin() {
    this.showExt = !this.showExt;
  }
}
