import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organisation } from '../../core/models/organisation.model';
import { ClusterIconStyle } from '@google/markerclustererplus';
import { EntityType } from '../../core/enums/organisation-type.enum';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../../core/http/api.service';
import { environment } from '../../../environments/environment';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationModalComponent } from '../../shared/modals/organisation-modal/organisation-modal.component';
import { mapSettings } from '../../core/map-settings';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  EntityType = EntityType;
  baseUrl = environment.serverUrl;

  coworkingPin = {
    url: 'assets/map-pins/pin-coworking.svg',
    scaledSize: {
      height: 50,
      width: 50
    }
  } as google.maps.Icon;

  investorPin = {
    url: 'assets/map-pins/pin-investor.svg',
    scaledSize: {
      height: 50,
      width: 50
    }
  } as google.maps.Icon;

  mediaPin = {
    url: 'assets/map-pins/pin-media.svg',
    scaledSize: {
      height: 50,
      width: 50
    }
  } as google.maps.Icon;

  startupPin = {
    url: 'assets/map-pins/pin-startup.svg',
    scaledSize: {
      height: 50,
      width: 50
    }
  } as google.maps.Icon;

  iconStyle = [
    {
      width: 111,
      height: 111,
      url: 'assets/map-pins/m5.png',
      textColor: '#FFFFFF',
      textLineHeight: 111,
      textSize: 22,
      fontFamily: '\'Ambit\', sans-serif',
      fontWeight: '600'
    }
  ] as ClusterIconStyle[];

  styles = mapSettings as google.maps.MapTypeStyle[];

  organisations: Organisation[];
  filteredOrganisations: Organisation[];
  regions: string[];

  keyword: string;
  showResults: boolean;
  searchOrganisations: Organisation[];

  filterForm: FormGroup = this.fb.group({
    type: [''],
    region: ['']
  });

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private dialog: MatDialog) {
  }


  ngOnInit(): void {
    this.organisations = this.route.snapshot.data.organisations;
    this.filteredOrganisations = this.organisations.map(elm => elm);
    this.regions = this.organisations.map(elm => elm.address.city).filter(elm => elm !== null && elm !== '');

    this.filterForm.valueChanges.subscribe(({type, region}) => {
      this.filteredOrganisations = this.organisations.filter(elm => {
        let state = true;
        if (type) {
          state = state && (elm.type === type);
        }
        if (region) {
          state = state && (elm.address.city === region);
        }
        return state;
      });
    });

    if (this.route.snapshot.queryParams.keyword) {
      this.keyword = this.route.snapshot.queryParams.keyword;
      this.search();
    }
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

  count(type: EntityType): number {
    return this.filteredOrganisations.filter(elm => elm.type === type).length;
  }

  search(): void {
    if (this.keyword) {
      this.searchOrganisations = this.organisations
        .filter(elm => elm.name.toLowerCase().includes(this.keyword.toLowerCase())
          || elm.description.toLowerCase().includes(this.keyword.toLowerCase()));
      this.showResults = true;
    }
  }

  openOrganisationDetailModal(organisation: Organisation): void {
    this.dialog.open(OrganisationModalComponent, {
      disableClose: false,
      panelClass: 'custom-mat-dialog',
      data: {
        organisation
      }
    });
  }

  setType(type: EntityType): void {
    if (this.filterForm.get('type').value === type) {
      this.filterForm.patchValue({ type: '' });
    } else {
      this.filterForm.patchValue({ type });
    }
  }

}
