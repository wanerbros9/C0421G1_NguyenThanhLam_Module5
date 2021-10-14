import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-delete-car-register',
  templateUrl: './delete-car-register.component.html',
  styleUrls: ['./delete-car-register.component.css']
})
export class DeleteCarRegisterComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

}
