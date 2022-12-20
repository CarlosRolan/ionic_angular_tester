import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
// IMPORT OF MY COMPONENTS as inyection
import { MyHeaderModule } from './my-header/my-header.module';
import { MenuHomeModule } from './menu-home/menu-home.module';

@NgModule({
  declarations: [],
  exports: [MyHeaderModule, MenuHomeModule],
  imports: [
    CommonModule, IonicModule
  ]
})
export class ComponentsModule { }
