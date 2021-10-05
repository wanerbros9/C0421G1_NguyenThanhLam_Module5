import {Component, OnInit} from '@angular/core';
import {User} from './user';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-form-register',
  templateUrl: './form-register.component.html',
  styleUrls: ['./form-register.component.css']
})
export class FormRegisterComponent implements OnInit {

  user: User;
  userForm: FormGroup;

  constructor() {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      passwordGroup: new FormControl({
        password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        confirmPassword: new FormControl('', [Validators.required, Validators.minLength(6)])
      }, {validators: this.comparePassword}),
      country: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      gender: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]),
    });
  }

  function;

  comparePassword(check: AbstractControl) {
    const value = check.value;
    return (value.password == value.confirmPassword) ? null : {
      passwordNotMatch: true
    };
  }

  ngOnInit(): void {
  }

  createUserReactiveForm() {
    console.log(this.userForm.value);
  }

}
