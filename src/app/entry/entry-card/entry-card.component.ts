import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { Entry } from '../entry.model';

@Component({
  selector: 'app-entry-card',
  template: `
    <p-fieldset legend="{{entry.name}}">
      <span class="ui-text"> Definition: {{entry.definition}} </span>
      <br/>
      <span> Example: {{entry.example}} </span>
    </p-fieldset>
    <br>
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
