import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry-card',
  template: `
    <p>
      Entry Name: {{entry.name}}
    </p>
    <p>
      Definition: {{entry.definition}}
    </p>
    <p>
      Example: {{entry.example}}
    </p>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EntryCardComponent implements OnInit {

  @Input() entry: Entry;

  constructor() { }

  ngOnInit() {
  }

}
