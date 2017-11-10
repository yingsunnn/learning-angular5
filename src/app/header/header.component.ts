import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/entries/entry-list">Entry List</a>
    </nav>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
