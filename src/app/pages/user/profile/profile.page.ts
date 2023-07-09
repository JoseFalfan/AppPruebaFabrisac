import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  character : any;

  constructor() { 
    
  }

  ngOnInit() {
    this.character = history.state.character;
  }

}
