import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  result: string;

  //Inyection in the controller
  constructor(public actionSheetCtrl: ActionSheetController) { }

  // Evento on click in the button
  showActionSheet() {
    this.presentActionSheet();
  }

  // Remember the async
  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Header',
      // This properti make the actionSheet a modalView
      //backdropDismiss: false,
      subHeader: 'Subheader',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: 'trash-outline',
          data: {
            action: 'delete',
          },
          cssClass: 'red',
          handler: () => {
            console.log('DElETE CLICKED');
          }
        },
        {
          text: 'Share',
          icon: 'share-outline',
          data: {
            action: 'share',
          },
          handler: () => {
            console.log('SHARE CLICKED');
          }
        },

        {
          text: 'Favorite',
          role: 'favorite',
          icon: 'star-outline',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('FAVORITE CLICKED');
          }
        },
        {
          text: 'Play',
          icon: 'caret-forward-circle-outline',
          data: {
            action: 'play',
          },
          handler: () => {
            console.log('PLAY CLICKED');
          }
        },

        {
          text: 'Cancel',
          role: 'cancel',
          icon: 'close-outline',
          data: {
            action: 'cancel',
          },
          handler: () => {
            console.log('CANCEL CLICKED');
          }
        },
      ],
    });

    await actionSheet.present();

    const result = await actionSheet.onDidDismiss();
    this.result = JSON.stringify(result, null, 2);
  }

  ngOnInit() {
  }

}
