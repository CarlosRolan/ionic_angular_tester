import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-infinite-scroll',
  templateUrl: './infinite-scroll.page.html',
  styleUrls: ['./infinite-scroll.page.scss'],
})
export class InfiniteScrollPage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  data: any[] = Array(20);

  constructor() { }

  ngOnInit() {
  }

  loadDataWithEvent(event) {
    setTimeout(() => {
      console.log(event);
      console.log('Done');
      event.target.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length === 100) {
        event.target.disabled = true;
      }
    }, 500);
  }

  loadDataWithChild(event) {
    // [IMPORTANT] We can stop the disable with the event or with ViewChild(IonInfiniteScroll) or with the HTML component
    setTimeout(() => {

      const addedData = Array(20);

      this.data.push(...addedData);
      // [NOTE] Remember to use this to complete the carge of the scroll
      this.infiniteScroll.complete();
      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.data.length > 50) {
        this.infiniteScroll.disabled = true;
        this.infiniteScroll.complete();
        return;
      }
    }, 500);
  }
  //Ininite Scroll
  loadDataInfinite(event) {
    setTimeout(() => {

      const addedData = Array(20);

      this.data.push(...addedData);
      // [NOTE] Remember to use this to complete the carge of the scroll
      this.infiniteScroll.complete();

    }, 500);
  }

}
