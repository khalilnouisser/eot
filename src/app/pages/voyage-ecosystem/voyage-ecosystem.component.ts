import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MindsetModalComponent } from './mindset-modal/mindset-modal.component';

@Component({
  selector: 'app-voyage-ecosystem',
  templateUrl: './voyage-ecosystem.component.html',
  styleUrls: ['./voyage-ecosystem.component.scss']
})
export class VoyageEcosystemComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEcosystemModal(): void {
    this.dialog.open(MindsetModalComponent, {
      disableClose: false,
      panelClass: 'mindset-dialog'
    });
  }

}
