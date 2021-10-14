import {Component, OnInit} from '@angular/core';
import {CarRegister} from '../models/car-register';
import {CarTypeService} from '../service/car-type.service';
import {CarStationService} from '../service/car-station.service';
import {Router} from '@angular/router';
import {CarRegisterService} from '../service/car-register.service';
import {MatDialog} from '@angular/material/dialog';
import {DeleteCarRegisterComponent} from '../delete-car-register/delete-car-register.component';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-car-register',
  templateUrl: './car-register.component.html',
  styleUrls: ['./car-register.component.css']
})
export class CarRegisterComponent implements OnInit {

  carRegisters: CarRegister[];

  constructor(private carTypeService: CarTypeService,
              private carStationService: CarStationService,
              private carRegisterService: CarRegisterService,
              private router: Router,
              private dialog: MatDialog,
              private snackBar: MatSnackBar) {

  }

  deleteCarRegister(id: any, carNumber: number) {
    let dialogRef = this.dialog.open(DeleteCarRegisterComponent, {data: {name: carNumber}});

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      if (result == 'true') {
        this.carRegisterService.delete(id).subscribe(next => {
          this.ngOnInit();
        });
      }
    });
  }

  ngOnInit(): void {
    this.carRegisterService.findAll().subscribe(next => {
      this.carRegisters = next;
      console.log(this.carRegisters);
    }, error => {

    }, () => {

    });
    console.log(this.carRegisters);
  }

}
