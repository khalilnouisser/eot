import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Organisation } from '../../core/models/organisation.model';
import { ClusterIconStyle } from '@google/markerclustererplus';
import { EntityType } from '../../core/enums/organisation-type.enum';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  EntityType = EntityType;

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

  styles = [
    {
      featureType: 'administrative',
      elementType: 'geometry.stroke',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'administrative.country',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'administrative.neighborhood',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#383838'
        }
      ]
    },
    {
      featureType: 'administrative.province',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'labels.icon',
      stylers: [
        {
          color: '#9c9c9c'
        }
      ]
    },
    {
      featureType: 'landscape',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#454545'
        }
      ]
    },
    {
      featureType: 'landscape.man_made',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'landscape.natural',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#f7f7f7'
        }
      ]
    },
    {
      featureType: 'landscape.natural.terrain',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#e5e5e5'
        }
      ]
    },
    {
      featureType: 'poi',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'poi.park',
      stylers: [
        {
          visibility: 'on'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#e5e5e5'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#858585'
        }
      ]
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.icon',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#383838'
        }
      ]
    },
    {
      featureType: 'transit',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'labels.icon',
      stylers: [
        {
          saturation: -100
        },
        {
          lightness: 30
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'transit',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'transit.line',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text',
      stylers: [
        {
          color: '#8f8f8f'
        }
      ]
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#f5f5f5'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [
        {
          color: '#919191'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'geometry.fill',
      stylers: [
        {
          color: '#ededed'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text',
      stylers: [
        {
          visibility: 'off'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [
        {
          color: '#4f4f4f'
        }
      ]
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [
        {
          color: '#ffffff'
        }
      ]
    }
  ] as google.maps.MapTypeStyle[];

  organisations: Organisation[];
  filteredOrganisations: Organisation[];
  regions: string[];

  filterForm: FormGroup = this.fb.group({
    type: [''],
    region: ['']
  });

  constructor(private route: ActivatedRoute,
              private fb: FormBuilder) {
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

}
