import { Component, OnInit } from '@angular/core';
import { ZonesService } from '../service/zones.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-parades',
  templateUrl: './parades.page.html',
  styleUrls: ['./parades.page.scss']
})
export class ParadesPage implements OnInit { 
  parades: any;
  id: string;

  constructor(private route: ActivatedRoute,
              private zonesService: ZonesService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getParades(this.id);
  }

  getParades(id: string): void {
    this.zonesService.getParadesByZoneId(id).subscribe(data => {
      this.parades = data.body.result;
    });
  }
}
