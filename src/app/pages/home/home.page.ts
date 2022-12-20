import { Component, OnInit } from '@angular/core';
import { MyItem } from '../../models/my-item';
import { MenuHomeComponent } from '../../components/menu-home/menu-home.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {



  extraItem: MyItem = {
    icon: 'warning',
    name: 'ExtraItem',
    redirectTo: '',
  };

  itmes: MyItem[] =
    [...MenuHomeComponent.default,
    this.extraItem
    ];


  constructor() { }

  ngOnInit() {
  }

}
