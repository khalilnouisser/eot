import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../core/http/api.service';
import { EntityType } from '../../../core/enums/organisation-type.enum';
import { MatDialog } from '@angular/material/dialog';
import { MapSelectComponent } from '../../../shared/modals/map-select/map-select.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.scss']
})
export class StartupComponent implements OnInit {

  startupForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    type: [EntityType.Startup, [Validators.required]],
    description: ['', [Validators.required]],
    created_at: ['', [Validators.required]],
    address: this.fb.group({
      street_address: ['', [Validators.required]],
      country: ['Tunisie'],
      city: ['Tunis', [Validators.required]],
      latitude: ['', [Validators.required]],
      longitude: ['', [Validators.required]]
    }),
    contact: this.fb.group({
      website: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]]
    }),
    social: this.fb.group({
      linkedin: [''],
      facebook: [''],
      twitter: [''],
      instagram: ['']
    }),
    sector: ['Média', [Validators.required]],
    advancementStage: ['MVP', [Validators.required]],
    cofounders: ['', [Validators.required]],
    funding: ['', [Validators.required]],
    employees: ['', [Validators.required]]
  });

  image: {file: File, content: string | ArrayBuffer};

  constructor(private fb: FormBuilder,
              private api: ApiService,
              private dialog: MatDialog,
              private router: Router) { }

  ngOnInit(): void {
  }

  onImageSelection(event: any): void {
    const reader = new FileReader();
    if (event.target.files && event.target.files.length) {
      let file: File;
      [file] = event.target.files;
      reader.readAsDataURL(file);

      reader.onload = () => {
        this.image = {
          file,
          content: reader.result
        };
      };
    }
  }

  submit(): void {
    if (this.startupForm.valid && this.image.file) {
      const body = Object.assign({}, this.startupForm.value);
      this.api.addOrganisation(body).then(response => {
        this.api.uploadOrganisationLogo(response.id, this.image.file).then(() => {
          console.log('Startup ajoutée avec succès');
          this.router.navigate(['/organisation', response.id]);
        }).catch(() => {
          console.error('ERROR: Unable to upload image');
        });
      }).catch(() => {
        console.error('ERROR: Unable to add startup');
      });
    }
  }

  selectMapPin(): void {
    const dialog = this.dialog.open(MapSelectComponent, {
      disableClose: false,
      panelClass: 'custom-mat-dialog',
      data: {
        latitude: this.startupForm.get('address').get('latitude').value,
        longitude: this.startupForm.get('address').get('longitude').value,
      }
    });
    dialog.afterClosed().subscribe(value => {
      this.startupForm.get('address').patchValue({
        latitude: value[0],
        longitude: value[1]
      });
    });
  }

  get mapCoordinates(): string {
    if (this.startupForm.get('address').get('latitude').value && this.startupForm.get('address').get('longitude').value) {

      const latitude = this.toDegreesMinutesAndSeconds(this.startupForm.get('address').get('latitude').value);
      const latitudeCardinal = this.startupForm.get('address').get('longitude').value >= 0 ? 'N' : 'S';

      const longitude = this.toDegreesMinutesAndSeconds(this.startupForm.get('address').get('longitude').value);
      const longitudeCardinal = this.startupForm.get('address').get('longitude').value >= 0 ? 'E' : 'W';

      return `${latitude} ${latitudeCardinal} ${longitude} ${longitudeCardinal}`;
    } else {
      return '';
    }
  }

  toDegreesMinutesAndSeconds(coordinate): string {
    const absolute = Math.abs(coordinate);
    const degrees = Math.floor(absolute);
    const minutesNotTruncated = (absolute - degrees) * 60;
    const minutes = Math.floor(minutesNotTruncated);
    const seconds = Math.floor((minutesNotTruncated - minutes) * 60);

    return `${degrees}°${minutes}'${seconds}"`;
  }

}
