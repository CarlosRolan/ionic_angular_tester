import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CheckBoxesPage } from './check-boxes.page';

const routes: Routes = [
  {
    path: '',
    component: CheckBoxesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CheckBoxesPageRoutingModule {}
