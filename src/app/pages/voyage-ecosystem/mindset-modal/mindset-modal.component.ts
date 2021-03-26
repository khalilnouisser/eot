import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mindset-modal',
  templateUrl: './mindset-modal.component.html',
  styleUrls: ['./mindset-modal.component.scss']
})
export class MindsetModalComponent implements OnInit {

  step = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementStep(): void {
    this.step++;
  }

  decrementStep(): void {
    this.step--;
  }

}
