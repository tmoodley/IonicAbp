import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UtilService } from '../service/util.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
    private _authService: AuthService,
    private _utilService: UtilService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._utilService
      .getCookieValue('token');
  }
}
