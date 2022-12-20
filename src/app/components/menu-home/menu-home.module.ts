import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuHomeComponent } from './menu-home.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [MenuHomeComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    RouterModule,
  ],
  exports: [MenuHomeComponent]
})
export class MenuHomeModule { }
