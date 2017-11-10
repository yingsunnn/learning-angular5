import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EntryCardComponent } from './entry-card/entry-card.component'

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'entry-card', component: EntryCardComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EntryRoutingModule { }
