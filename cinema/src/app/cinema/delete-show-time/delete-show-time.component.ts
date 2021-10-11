import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-show-time',
  templateUrl: './delete-show-time.component.html',
  styleUrls: ['./delete-show-time.component.css']
})
export class DeleteShowTimeComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
