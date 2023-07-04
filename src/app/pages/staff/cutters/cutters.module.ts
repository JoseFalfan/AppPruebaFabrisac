import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CuttersPageRoutingModule } from './cutters-routing.module';

import { CuttersPage } from './cutters.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CuttersPageRoutingModule
  ],
  declarations: [CuttersPage]
})
export class CuttersPageModule {}
