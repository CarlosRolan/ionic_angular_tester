import { Component, OnInit, Self } from '@angular/core';

@Component({
  selector: 'app-check-boxes',
  templateUrl: './check-boxes.page.html',
  styleUrls: ['./check-boxes.page.scss'],
})
export class CheckBoxesPage implements OnInit {

  constructor() { }

  // [IMPORTANT] this is how we get the check box which calls the method
  onClick(event: any) {
    console.log(event.srcElement);
  }

  ngOnInit() {
  }

}
