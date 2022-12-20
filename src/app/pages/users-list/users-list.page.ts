import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Observable } from 'rxjs/internal/Observable';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.page.html',
  styleUrls: ['./users-list.page.scss'],
})
export class UsersListPage implements OnInit {



  // [IMPORTANT] We want the beheavor of close the items option once we lick on one
  // there is diferent ways to do it, with this we control the IonList as an component
  @ViewChild(IonList) ionList: IonList;

  users: Observable<any>;

  constructor(private userDataService: UserDataService) { }

  ngOnInit() {
    // [IMPORTANT] this is an observable so wee need to call the method subribe to trigger the information
    this.users = this.userDataService.getUsers();

    this.users.subscribe(console.log);
  }

  //Item options actions
  favorite(user: any) {
    console.log('favorite', user.name);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('share', user.name);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    this.ionList.closeSlidingItems();
  }

}
