import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <button pButton type="button" label="This is a footer"></button>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
