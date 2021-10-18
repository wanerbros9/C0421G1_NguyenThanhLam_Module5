import {Component, OnInit} from '@angular/core';
import {CarStation} from '../models/car-station';
import {CarType} from '../models/car-type';
import {CarRegister} from '../models/car-register';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CarRegisterService} from '../service/car-register.service';
import {CarTypeService} from '../service/car-type.service';
import {CarStationService} from '../service/car-station.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-car-register',
  templateUrl: './edit-car-register.component.html',
  styleUrls: ['./edit-car-register.component.css']
})
export class EditCarRegisterComponent implements OnInit {

  carRegister: CarRegister;
  carTypeList: CarType[];
  carStationList: CarStation[];
  id: number;

  carRegisterForm = new FormGroup({
    id: new FormControl(''),
    carNumber: new FormControl('', [Validators.required]),
    carType: new FormControl('', [Validators.required]),
    carStation: new FormControl('', [Validators.required]),
    departure: new FormControl('', [Validators.required]),
    arrive: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    departureHour: new FormControl('', [Validators.required]),
    arriveHour: new FormControl('', [Validators.required])
  });

  constructor(private carRegisterService: CarRegisterService,
              private carTypeService: CarTypeService,
              private carStationService: CarStationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private snackBar: MatSnackBar) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(this.carRegister);
      this.id = +paramMap.get('id');
      this.getList();
      console.log(this.carRegister);
    });
  }

  getCarRegister(index: number) {
    return this.carRegisterService.findById(index).subscribe(item => {
      this.carRegister = item;
      this.carRegisterForm.setValue(item);
      console.log(this.carRegisterForm);
    });
  }

  update(index: number) {
    const value = this.carRegisterForm.value;
    this.carRegisterService.update(index, value).subscribe(() => {
      this.router.navigateByUrl('');
      this.openSnackBar('Success', 'Close');
    });
  }

  getList() {
    this.carStationService.findAllCarStation().subscribe(list => {
      this.carStationList = list;
      console.log(list);
    });
    this.carTypeService.findAllCarType().subscribe(list => {
      this.carTypeList = list;
      console.log(list);
    });
    this.getCarRegister(this.id);
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action);
  }

  ngOnInit(): void {
  }

  validationMessage = {
    carType: [
      {type: 'required', message: 'Chưa chọn loại xe'}
    ],
    carStation: [
      {type: 'required', message: 'Chưa chọn nhà xe'}
    ],
    departure: [
      {type: 'required', message: 'Chưa nhập điểm đi'}
    ],
    arrive: [
      {type: 'required', message: 'Chưa nhập điểm đến'}
    ]
  };
}
