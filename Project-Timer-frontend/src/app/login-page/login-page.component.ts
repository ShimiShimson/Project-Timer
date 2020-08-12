import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';
import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent {
  constructor (public router: Router) {}

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

  onSubmit(): void {
    this.router.navigate([''])
  }
}
