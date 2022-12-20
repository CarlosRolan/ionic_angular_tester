import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  //Inyection
  constructor(private alertCtrl: AlertController) { }

  // [i] alert_simple
  async presentAlert() {
    const alert = await this.alertCtrl.create({
      // [IMPORTANT] Force the user to interact
      backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an alert!',
      buttons: ['OK'],
    });

    await alert.present();
  }

  // [i] alert_multibuttons
  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      // [IMPORTANT] Force the user to interact
      //backdropDismiss: false,
      header: 'Alert',
      subHeader: 'Important message',
      message: 'This is an multiButton alert!',
      // [NOTE] Remember you can define your own buttons
      buttons: ['OptionEx', { text: 'My button clicked', handler: () => { console.log('Personal Button clicked') } }, { text: 'My CANCEL button clicked', role: 'cancel', handler: () => { console.log('Personal CANCEL Button clicked') }, cssClass: 'red', }],
    });

    await alert.present();
  }

  // [IMPORTNAT] Radios, checkboxes and text inputs are all accepted, but they cannot be mixed.

  // [i] alert_prompt
  async presentAlertPrompt() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [{
        text: 'Sumbmit', handler: (value) => {
          console.log(value)
        },
      }],
      inputs: [
        // simple
        {
          placeholder: 'Name',
          // checked
          // disabled
          // id
          // label
          // type
          // tabindex
          // value
          // attributes{}
          // cssClass
          // min - max
        },
        // with restrictions
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        // number
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        // multi-line
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
        //input date with min and max
        {
          type: 'date',
          min: '2000-01-01',
          max: '2100-12-31',
        },
        //input date with min and max
        {
          type: 'url',
          placeholder: 'your ww.url.com here'
        },

      ],
    });
    await alert.present();
  }

  // [i] alert_prompt_radioButtons
  async presentAlertRadio() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [{
        text: 'Sumbmit', handler: (value) => {
          console.log(value)
        },
      }],
      inputs: [
        // radioButtons
        {
          label: 'Male',
          type: 'radio',

        },
        {
          label: 'Female',
          type: 'radio',
        },
        {
          label: 'Other',
          type: 'radio',
        },
      ],
    });
    await alert.present();
  }
  // [i] alert_prompt_checkBox
  async presentAlertCheckBox() {
    const alert = await this.alertCtrl.create({
      header: 'Please enter your info',
      buttons: [{
        text: 'Sumbmit', handler: (value) => {
          console.log(value)
        },
      }],
      inputs: [
        {
          label: 'Adult',
          type: 'checkbox',
        },
        {
          label: 'House',
          type: 'checkbox',
          checked: true,

        },
        {
          label: 'Apartament',
          type: 'checkbox',
          checked: true,
        },
      ],
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
