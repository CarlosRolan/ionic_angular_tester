import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyHeaderComponent } from './my-header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [MyHeaderComponent],
  imports: [
    CommonModule,
    IonicModule,
  ],
  exports: [MyHeaderComponent]
})
export class MyHeaderModule { }
