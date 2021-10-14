import {AfterViewInit, Component, Inject, OnInit} from '@angular/core';
import {ShowTime} from '../models/show-time';
import {Movie} from '../models/movie';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ShowTimeService} from '../service/show-time.service';
import {MovieService} from '../service/movie.service';
import {Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-create-show-time',
  templateUrl: './create-show-time.component.html',
  styleUrls: ['./create-show-time.component.css']
})
export class CreateShowTimeComponent implements OnInit {

  showTimes: ShowTime;
  movieName: Movie[];
  showTimeForm: FormGroup;

  todayDate: Date = new Date();

  constructor(private showTimeService: ShowTimeService,
              private movieService: MovieService,
              private router: Router,
              private snackBar: MatSnackBar,
              @Inject(MAT_DIALOG_DATA) public data: any) {
    // this.showTimeForm = new FormGroup({
    //   id: new FormControl(''),
    //   movieNameShow: new FormControl('', [Validators.required]),
    //   showTimeCode: new FormControl('', [Validators.required, Validators.pattern(/^CI-[0-9]{4}$/)]),
    //   showDate: new FormControl('', [Validators.required]),
    //   ticketAmount: new FormControl('', [Validators.required, Validators.min(1)])
    // });
    //
    // this.movieService.findAllMovies().subscribe(next => {
    //   this.movieName = next;
    //   console.log(this.movieName);
    // }, error => {
    //
    // }, () => {
    //
    // });
    // console.log(this.movieName);
  }

  // create() {
  //   console.log(this.showTimeForm);
  //   if (this.showTimeForm.valid) {
  //     this.showTimeService.createShowTime(this.showTimeForm.value).subscribe(next => {
  //       this.router.navigateByUrl('');
  //       this.openSnackBar('Success', 'Close');
  //     });
  //   } else {
  //   }
  // }
  //
  // openSnackBar(message: string, action: string) {
  //   this.snackBar.open(message, action);
  // }

  ngOnInit(): void {
  }

}
