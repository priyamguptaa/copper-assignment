import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  currentActiveLink = 0;


  constructor() { }

  ngOnInit(): void {
  }
  
  selectedNavlink(type: number) {
    this.currentActiveLink = type;
  }

}
