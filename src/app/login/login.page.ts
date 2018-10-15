import { AuthenticateModel } from './../../shared/service-proxies/service-proxies';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private _authService: AuthService,
              private _loadingCtrl: LoadingController,
              private _alertCtrl: AlertController) { }

  ngOnInit() {
  }
  async onLogin(form: NgForm) {
    const loading = await this._loadingCtrl.create({
      message: 'Loggin you in...',
      duration: 2000
    });
    loading.present();
    console.log(form.value.username);
    const model = new AuthenticateModel({
      userNameOrEmailAddress: form.value.username,
      password: form.value.password,
      rememberClient: true
    });
    console.log(model);
    this._authService.authenticateModel = model;

    this._authService.authenticate();

    // const alert = await this._alertCtrl.create({
    //     header: 'Alert',
    //     subHeader: 'Subtitle',
    //     message: 'This is an alert message.',
    //     buttons: ['Cancel', 'Open Modal', 'Delete']
    //   });
  
    //   await alert.present();
    //   console.log(form.value);
    
  }

   
}
