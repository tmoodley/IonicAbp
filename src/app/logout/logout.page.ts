import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UtilService } from '../service/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.page.html',
  styleUrls: ['./logout.page.scss'],
})
export class LogoutPage implements OnInit {
  constructor(
    private _authService: AuthService,
    private _utilService: UtilService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._utilService
      .deleteCookie('token');
    this._router.navigate(['login']);
  }
}
