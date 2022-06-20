import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.css'],
})
export class SidebarComponent implements OnInit {

  display: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  openClose() {
    this.display = !this.display; 
  }

  goToLink(url: string){
    window.open(url, "_blank");
}

}
