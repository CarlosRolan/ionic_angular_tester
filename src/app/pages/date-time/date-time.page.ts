import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {


  today: Date = new Date();

  yearValues = [3030, 1986, 40000];
  monthValues = ['II', 'III', 'IV'];

  customPickerOptions = {
    buttons: [
      {
        text: 'BTN_CLG',
        handler: (event) => {
          console.log(event);
        }
      },
      {
        text: 'BTN_2',
        handler: () => {
          console.log('HAHAHAHAHHA');
        }
      },

    ]
  };



  constructor() { }

  onDateChange(event: any) {
    console.log(event.detail.value);
    console.log('JAVA SCRYPT FORMAT:', new Date(event.detail.value));
  }

  ngOnInit() {
  }

}
