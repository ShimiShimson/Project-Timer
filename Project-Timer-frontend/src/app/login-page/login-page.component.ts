import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})

export class LoginPageComponent implements OnInit{
  constructor (public router: Router) {}
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;

  validateForm(): void {
    this.loginForm = new FormGroup({
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
  }

  ngOnInit(): void {
    this.validateForm();
  }


  onSubmit(): void {
    this.router.navigate([''])
  }
}
