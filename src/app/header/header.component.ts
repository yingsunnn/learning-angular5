import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/primeng';

@Component({
  selector: 'app-header',
  template: `
    <p-menubar [model]="items">
      <input type="text" pInputText placeholder="Search">
      <button pButton label="Logout" icon="fa-sign-out"></button>
    </p-menubar>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  items: MenuItem[];  

  constructor() { }

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: '/'
      },
      {
        label: 'Entry List',
        routerLink: '/entries/entry-list'
      }
  ];
  }

}
