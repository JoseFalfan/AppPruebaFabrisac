import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CuttersPage } from './cutters.page';

const routes: Routes = [
  {
    path: '',
    component: CuttersPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),CommonModule],
  exports: [RouterModule],
})
export class CuttersPageRoutingModule {}
