import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    autoplay: false,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      }
    },
    nav: true
  };
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
        items: 2
      }
    },
    nav: true
  };

  constructor() {
  }

  ngOnInit(): void {
  }

}
