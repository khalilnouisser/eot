import { Component, OnInit } from '@angular/core';
import { TitleService } from '../../core/services/title.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private titleService: TitleService) {
  }

  ngOnInit(): void {
    this.titleService.setTitle('Contact');
  }

}
