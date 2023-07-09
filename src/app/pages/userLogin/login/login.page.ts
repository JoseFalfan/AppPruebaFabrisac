import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  ModelUser: string = '';
  ModelPassword: string = '';

  constructor(private toastController: ToastController) { }

  ngOnInit() {
  }

  validation() {
    console.log(this.ModelUser);
    console.log(this.ModelPassword);
  }

  async presentToast(msj:string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 1500,
      position: 'bottom',
    });
    await toast.present();
    }

}