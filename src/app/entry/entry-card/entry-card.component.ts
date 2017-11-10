import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-entry-card',
  template: `
    <p>
      entry-card works!
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EntryCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
