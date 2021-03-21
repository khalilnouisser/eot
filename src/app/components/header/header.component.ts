import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menus = [
    {
      title: 'Accueil',
      icon: 'home',
      path: 'home'
    },
    {
      title: 'Map',
      icon: 'map',
      path: 'map'
    },
    {
      title: 'Insights',
      icon: 'insights',
      path: 'insights'
    },
    {
      title: 'Jobs',
      icon: 'jobs',
      path: 'jobs'
    },
    {
      title: 'À propos',
      icon: 'about',
      path: 'about'
    },
    {
      title: 'Partenaires',
      icon: 'partners',
      path: 'partners'
    },
    {
      title: 'Contact',
      icon: 'contact',
      path: 'contact'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
