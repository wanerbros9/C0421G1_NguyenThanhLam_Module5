import {Component, OnInit} from '@angular/core';
import {CarRegister} from '../models/car-register';
import {CarType} from '../models/car-type';
import {CarStation} from '../models/car-station';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {CarRegisterService} from '../service/car-register.service';
import {CarTypeService} from '../service/car-type.service';
import {CarStationService} from '../service/car-station.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-create-car-register',
  templateUrl: './create-car-register.component.html',
  styleUrls: ['./create-car-register.component.css']
})
export class CreateCarRegisterComponent implements OnInit {

  carRegister: CarRegister;
  id: number;
  carTypeList: CarType[];
  carStationList: CarStation[];

  createForm: FormGroup;

  constructor(private carRegisterService: CarRegisterService,
              private carTypeService: CarTypeService,
              private carStationService: CarStationService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.getCarStation();
    this.getCarType();
    this.createForm = new FormGroup({
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
  }

  getCarType() {
    return this.carTypeService.findAllCarType().subscribe(list => {
      this.carTypeList = list;
    });
  }

  getCarStation() {
    return this.carStationService.findAllCarStation().subscribe(list => {
      this.carStationList = list;
    });
  }

  create() {
    const value = this.createForm.value;
    console.log(value);
    if (this.createForm.valid) {
      this.carRegisterService.create(value).subscribe(() => {
        this.router.navigateByUrl('');
      });
    } else {
      alert('Wrong Form');
    }
  }
}
