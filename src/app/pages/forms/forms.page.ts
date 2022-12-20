import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {

  user = {
    name: '',
    email: '',
    password: '',
  };

  constructor() { }

  // [NOTE] this form is the type:ngForm
  onSubmit(form) {
    console.log('Submit answer as FORM.VALUE:', form.value);
    console.log('Submit answer as a user var:', this.user);
  }

  ngOnInit() {
  }

}
