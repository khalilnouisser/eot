import { Component, OnInit } from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss']
})
export class InsightsComponent implements OnInit {

  constructor() { }

  insightsCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    navText: ['<img src="assets/images/arrow-slide-left.svg" class="arrow-slide">', '<img src="assets/images/arrow-slide-right.svg" class="arrow-slide">'],
    responsive: {
      0: {
        items: 1
      },
      1024: {
        items: 3
      }
    },
    nav: true
  };

  ngOnInit(): void {
  }

}
