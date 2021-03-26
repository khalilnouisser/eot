import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { ActivatedRoute } from '@angular/router';
import { Insight } from '../../core/models/insight.model';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  infography: Insight[][];
  reports: Insight[][];

  constructor(private route: ActivatedRoute) { }

  insightsCustomOptions: OwlOptions = {
    loop: false,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    navText: ['<img src="assets/images/arrow-slide-left.svg" class="arrow-slide">', '<img src="assets/images/arrow-slide-right.svg" class="arrow-slide">'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1024: {
        items: 1
      }
    },
    nav: true
  };

  ngOnInit(): void {
    this.infography = this.route.snapshot.data.infography.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows, []);
    this.reports = this.route.snapshot.data.reports.reduce((rows, key, index) => (index % 2 === 0 ? rows.push([key])
      : rows[rows.length - 1].push(key)) && rows, []);
  }

}
