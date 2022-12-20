import { Component } from '@angular/core';
// [IMPORTANT] We needed to add this to the component to use the cam
import { defineCustomElements } from '@ionic/pwa-elements/loader';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {
    defineCustomElements(window);
  }
}
