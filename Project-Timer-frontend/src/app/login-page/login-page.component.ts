import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {

  loginSuccessful = false;
  formSubmitted = false;

  loginForm = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
      Validators.pattern(/password/),
    ])
  })

  isLoginSuccess() {
    if (this.loginForm.controls.password.value === "password") return this.loginSuccessful = true;
    else return;
  }

  onSubmit() {
    this.isLoginSuccess();
    console.log(this.loginForm);
  }
}
