import { RouterModule } from '@angular/router';
import { ParadesPage } from './../parades/parades.page';
import { Component, OnInit } from '@angular/core';
import { ZonesService } from '../service/zones.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {
  constructor(private zonesService: ZonesService,
              public navCtrl: NavController,
              public router: RouterModule) { }
  zones: any;
  ngOnInit() {
   this.getZones();
  }

  getZones(): void {
    this.zonesService.getZones().subscribe(data => {
      this.zones = data.body.result;
    });
  }

  pushPage(id: string) {
    this.navCtrl.navigateForward('/parades/' + id);
  }
}
