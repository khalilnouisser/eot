import {Component, OnInit} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import { ApiService } from '../../core/http/api.service';
import { Stat } from '../../core/models/stat.model';
import { ActivatedRoute } from '@angular/router';
import { Insight } from '../../core/models/insight.model';

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
    nav: false,
    responsive: {
      0: {
        items: 1
      }
    }
  };
  insightsCustomOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoplay: false,
    navText: ['<img alt="left arrow" src="assets/images/arrow-slide-left.svg" class="arrow-slide">', '<img alt="right arrow" src="assets/images/arrow-slide-right.svg" class="arrow-slide">'],
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      1024: {
        items: 2
      }
    },
    nav: true
  };

  stats: Stat[];
  insights: Insight[];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.stats = this.route.snapshot.data.stats;
    this.insights = this.route.snapshot.data.insights;
  }

}
