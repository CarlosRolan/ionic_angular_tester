import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-list-reorder',
  templateUrl: './list-reorder.page.html',
  styleUrls: ['./list-reorder.page.scss'],
})
export class ListReorderPage implements OnInit {

  heros: string[] = ['Aquaman', 'Superman', 'Flash', 'WonderWoman'];

  constructor() { }

  ngOnInit() {

  }

  doReorder(event: any) {
    // [NOTE] In early version of ionic we have a funcition to change the position of the element in the array
    // nowadays we have to do it mnually with complete: f(), inside of details of the event
    console.log(event)

    // [i] ion-reorder ORDER_FUNCTION
    // [IMPORTANT] Now we need to modify the order of the elements in the arry, otherwise the ordor won't change

    // [IMPORTANT] If we want keep reordering the list we need to call the function complete
    event.detail.complete();

    console.log(this.heros)


  }

}
