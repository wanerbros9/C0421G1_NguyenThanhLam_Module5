import {Component, OnInit} from '@angular/core';
import {ShowTime} from '../models/show-time';
import {ShowTimeService} from '../service/show-time.service';
import {Route, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteShowTimeComponent} from '../delete-show-time/delete-show-time.component';

@Component({
  selector: 'app-list-show-time',
  templateUrl: './list-show-time.component.html',
  styleUrls: ['./list-show-time.component.css']
})
export class ListShowTimeComponent implements OnInit {

  showTimes: ShowTime[];

  constructor(private showTimeService: ShowTimeService,
              private router: Router,
              private dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.showTimeService.findAll().subscribe(next => {
      this.showTimes = next;
      console.log(this.showTimes);
    }, error => {

    }, () => {

    });
    console.log(this.showTimes);
  }

  deleteShowTime(id: any, showTimeCode: string) {
    let dialogRef = this.dialog.open(DeleteShowTimeComponent, {data: {name: showTimeCode}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == 'true') {
        this.showTimeService.deleteShowTime(id).subscribe(next => {
          this.ngOnInit();
        });
      }
    });
  }
}
