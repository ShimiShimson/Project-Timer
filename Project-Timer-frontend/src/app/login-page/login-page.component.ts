import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';
import { passwordValidator } from './correct-password.directive';

/**
 * @title Input with error messages
 */
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {

  loginSuccess = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(8),
    passwordValidator(/password/i),
  ])

  onSubmit() {
    console.log(this.emailFormControl)
    console.log(this.passwordFormControl)
    this.loginSuccess = true;
  }

  ngOnInit () {
    // console.log(this.emailFormControl)
    // console.log(this.passwordFormControl)
  }
}