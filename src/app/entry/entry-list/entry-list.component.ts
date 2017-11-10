import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Entry } from '../entry.model';
import { EntryCardComponent } from '../entry-card/entry-card.component';

@Component({
  selector: 'app-entry-list',
  template: `
    <p> 
      entry-list works!
    </p>
    <ul>
      <li *ngFor="let entry of entries; let i = index">
        <app-entry-card [entry] = "entry"></app-entry-card>
      </li>
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.None
})
export class EntryListComponent implements OnInit {

  entries : Array<Entry>;

  constructor() { }

  ngOnInit() {
    this.entries = new Array<Entry>();

    let entry : Entry = new Entry();
    entry.name = 'Name 1';
    entry.definition = 'def 1';
    entry.example = 'example 1';
    this.entries.push(entry);

    entry = new Entry();
    entry.name = 'Name 2';
    entry.definition = 'def 2';
    entry.example = 'example 2';
    this.entries.push(entry);
  }

}
