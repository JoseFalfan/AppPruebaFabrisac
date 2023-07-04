import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ModelUser: string = '';
  ModelPassword: string = '';

  constructor() { }

  ngOnInit() {
  }

  validation() {
    console.log(this.ModelUser);
    console.log(this.ModelPassword);
  }


}