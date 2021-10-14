import {Component, OnInit} from '@angular/core';
import {ShowTime} from '../models/show-time';
import {ShowTimeService} from '../service/show-time.service';
import {Route, Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {DeleteShowTimeComponent} from '../delete-show-time/delete-show-time.component';
import {Sort} from '@angular/material/sort';
import {MovieService} from '../service/movie.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Movie} from '../models/movie';
import {MatSnackBar} from '@angular/material/snack-bar';
import {CreateShowTimeComponent} from '../create-show-time/create-show-time.component';

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}

@Component({
  selector: 'app-list-show-time',
  templateUrl: './list-show-time.component.html',
  styleUrls: ['./list-show-time.component.css']
})

export class ListShowTimeComponent implements OnInit {

  showTimes: ShowTime[];
  movieName: Movie[];
  showTimeNew: ShowTime;
  sortedData: ShowTime[];

  constructor(private showTimeService: ShowTimeService,
              private movieService: MovieService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {

    this.movieService.findAllMovies().subscribe(next => {
      this.movieName = next;
      console.log(this.movieName);
    }, error => {

    }, () => {

    });
    console.log(this.movieName);
  }

  showTimeForm = new FormGroup({
    id: new FormControl(''),
    movieNameShow: new FormControl('', [Validators.required]),
    showTimeCode: new FormControl('', [Validators.required, Validators.pattern(/^CI-[0-9]{4}$/)]),
    showDate: new FormControl('', [Validators.required]),
    ticketAmount: new FormControl('', [Validators.required, Validators.min(1)])
  });

  sortData(sort: Sort) {
    this.sortedData = this.showTimes.slice();
    const data = this.showTimes.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }
    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'showTimeCode':
          return compare(a.showTimeCode, b.showTimeCode, isAsc);
        default:
          return 0;
      }
    });
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

  create() {
    let dialogRef = this.dialog.open(CreateShowTimeComponent, {data: {}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    console.log(this.showTimeForm);
    if (this.showTimeForm.valid) {
      this.showTimeService.createShowTime(this.showTimeForm.value).subscribe(next => {
        this.router.navigateByUrl('');
        this.openSnackBar('Success', 'Close');
      });
    } else {
    }
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }
}
