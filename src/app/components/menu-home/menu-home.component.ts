import { Component, OnInit, Input } from '@angular/core';
import { MyItem } from '../../models/my-item';


@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss'],
})
export class MenuHomeComponent implements OnInit {


  public static readonly default: MyItem[] = [
    {
      icon: 'documents-outline',
      name: 'Action Sheet',
      redirectTo: '/action-sheet',
    },
    {
      icon: 'alert-outline',
      name: 'Alerts',
      redirectTo: '/alert',
    },
    {
      icon: 'person-outline',
      name: 'Avatar',
      redirectTo: '/avatar',
    },
    {
      icon: 'add-circle-outline',
      name: 'Buttons',
      redirectTo: '/buttons',
    },
    {
      icon: 'camera-outline',
      name: 'Camera',
      redirectTo: '/camera',
    },
    {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/cards',
    },
    {
      icon: 'checkbox-outline',
      name: 'CheckBoxes',
      redirectTo: '/check-boxes',
    },
    {
      icon: 'calendar-outline',
      name: 'Date Time',
      redirectTo: '/date-time',
    },
    {
      icon: 'add-circle-outline',
      name: 'FABs',
      redirectTo: '/fabs',
    },
    {
      icon: 'card-outline',
      name: 'Forms',
      redirectTo: '/forms',
    },
    {
      icon: 'filter-outline',
      name: 'Infinite Scroll',
      redirectTo: '/infinite-scroll',
    },
    {
      icon: 'calendar-outline',
      name: 'Inputs',
      redirectTo: '/inputs',
    },
    {
      icon: 'add-circle-outline',
      name: 'Grid',
      redirectTo: '/ion-grid',
    },
    {
      icon: 'reorder-three-outline',
      name: 'List Reorder',
      redirectTo: '/list-reorder',
    },
    {
      icon: 'albums-outline',
      name: 'Scanner',
      redirectTo: '/scanner',
    },
    {
      icon: 'albums-outline',
      name: 'Users List',
      redirectTo: '/users-list',
    },

  ];

  @Input() itemList: MyItem[] = MenuHomeComponent.default;



  constructor() { }

  ngOnInit() { }

}
