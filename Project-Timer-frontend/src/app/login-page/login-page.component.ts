import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, Validators} from '@angular/forms';

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
  formSubmitted = false;

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(4),
    Validators.maxLength(10),
    Validators.pattern(/password/),
  ])

  onSubmit() {
    console.log(this.emailFormControl)
    console.log(this.passwordFormControl)
    this.loginSuccess = true;
  }

  ngOnInit () {
  }
}