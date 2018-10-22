import { Component, OnInit } from '@angular/core';
import { ZonesService } from '../service/zones.service';

@Component({
  selector: 'app-zones',
  templateUrl: './zones.page.html',
  styleUrls: ['./zones.page.scss'],
})
export class ZonesPage implements OnInit {

  constructor(private zonesService: ZonesService) { }
  zones: any;
  ngOnInit() {
   this.getZones();
  }

  getZones(): void {
    this.zonesService.getZones().subscribe(data => {
      this.zones = data.body.result;
    });
  }

}
