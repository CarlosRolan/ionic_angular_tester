import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CheckBoxesPageRoutingModule } from './check-boxes-routing.module';

import { CheckBoxesPage } from './check-boxes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    ComponentsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CheckBoxesPageRoutingModule
  ],
  declarations: [CheckBoxesPage]
})
export class CheckBoxesPageModule { }
