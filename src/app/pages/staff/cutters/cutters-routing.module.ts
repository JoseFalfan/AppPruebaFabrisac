import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CuttersPage } from './cutters.page';

const routes: Routes = [
  {
    path: '',
    component: CuttersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CuttersPageRoutingModule {}
