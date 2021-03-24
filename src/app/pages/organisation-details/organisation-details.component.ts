import { Component, OnInit } from '@angular/core';
import { mapSettings } from '../../core/map-settings';
import { ActivatedRoute } from '@angular/router';
import { Organisation } from '../../core/models/organisation.model';
import { environment } from '../../../environments/environment';
import * as moment from 'moment';

@Component({
  selector: 'app-organisation-details',
  templateUrl: './organisation-details.component.html',
  styleUrls: ['./organisation-details.component.scss']
})
export class OrganisationDetailsComponent implements OnInit {

  baseUrl = environment.serverUrl;
  styles = mapSettings as google.maps.MapTypeStyle[];

  moment = moment;

  organisation: Organisation;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.organisation = this.route.snapshot.data.organisation[0];
  }

  onMapReady(map: any): void {
    map.setOptions({
      fullscreenControl: false,
      streetViewControl: false,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP
      }
    });
  }

}
