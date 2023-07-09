import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private alertController : AlertController, private router: Router ) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Corte en produccion',
      subHeader: 'Precaucion al trabajar',
      message: 'Atencion al uso de colores especiales',
      buttons: ['Entendido'],
    });

    await alert.present();
  }

  navigation(address : string){
    this.router.navigate([address])
  }
}


