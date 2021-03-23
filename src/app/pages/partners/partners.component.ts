import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Partner } from '../../core/models/partner.model';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  baseUrl = environment.serverUrl;

  partners: Partner[];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.partners = this.route.snapshot.data.partners;
  }

}
