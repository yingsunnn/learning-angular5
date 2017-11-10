import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntryRoutingModule } from './entry-routing.module';
import { EntryCardComponent } from './entry-card/entry-card.component';

@NgModule({
  imports: [
    CommonModule,
    EntryRoutingModule
  ],
  declarations: [EntryCardComponent]
})
export class EntryModule { }
