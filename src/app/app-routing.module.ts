import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  // PATHS
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then(m => m.AlertPageModule)
  },
  {
    path: 'action-sheet',
    loadChildren: () => import('./pages/action-sheet/action-sheet.module').then(m => m.ActionSheetPageModule)
  },
  {
    path: 'camera',
    loadChildren: () => import('./pages/camera/camera.module').then(m => m.CameraPageModule)
  },

  // WHEN THE PATH IS EMPTY or DEFAULT PATH
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'scanner',
    loadChildren: () => import('./pages/scanner/scanner.module').then(m => m.ScannerPageModule)
  },
  {
    path: 'avatar',
    loadChildren: () => import('./pages/avatar/avatar.module').then(m => m.AvatarPageModule)
  },
  {
    path: 'buttons',
    loadChildren: () => import('./pages/buttons/buttons.module').then(m => m.ButtonsPageModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./pages/cards/cards.module').then(m => m.CardsPageModule)
  },
  {
    path: 'check-boxes',
    loadChildren: () => import('./pages/check-boxes/check-boxes.module').then(m => m.CheckBoxesPageModule)
  },
  {
    path: 'date-time',
    loadChildren: () => import('./pages/date-time/date-time.module').then(m => m.DateTimePageModule)
  },
  {
    path: 'fabs',
    loadChildren: () => import('./pages/fabs/fabs.module').then(m => m.FabsPageModule)
  },
  {
    path: 'ion-grid',
    loadChildren: () => import('./pages/ion-grid/ion-grid.module').then(m => m.IonGridPageModule)
  },
  {
    path: 'infinite-scroll',
    loadChildren: () => import('./pages/infinite-scroll/infinite-scroll.module').then(m => m.InfiniteScrollPageModule)
  },
  {
    path: 'inputs',
    loadChildren: () => import('./pages/inputs/inputs.module').then(m => m.InputsPageModule)
  },  {
    path: 'forms',
    loadChildren: () => import('./pages/forms/forms.module').then( m => m.FormsPageModule)
  },
  {
    path: 'users-list',
    loadChildren: () => import('./pages/users-list/users-list.module').then( m => m.UsersListPageModule)
  },
  {
    path: 'list-reorder',
    loadChildren: () => import('./pages/list-reorder/list-reorder.module').then( m => m.ListReorderPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
