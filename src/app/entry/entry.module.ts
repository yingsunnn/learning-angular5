import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EntryRoutingModule } from './entry-routing.module';
import { EntryCardComponent } from './entry-card/entry-card.component';
import { EntryListComponent } from './entry-list/entry-list.component';
import { FieldsetModule } from 'primeng/primeng';


@NgModule({
  imports: [
    CommonModule,
    FieldsetModule,
    EntryRoutingModule
  ],
  declarations: [EntryCardComponent, EntryListComponent]
})
export class EntryModule { }
