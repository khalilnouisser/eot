import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  width: number;

  constructor() { }

  ngOnInit(): void {
    this.width = 6;
  }

  resizeInput(inputText: string): number {
    const minWidth = 6;

    if (inputText.length + 4 > minWidth) {
      return inputText.length + 4;
    } else {
      return minWidth;
    }
  }

}
