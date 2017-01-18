import { Component, OnInit } from '@angular/core';
import { SignIn } from "../../models/sign-in.model";

@Component({
  selector: 'login-form',
  template: require('./login-form.component.html')
})
export class LoginFormComponent implements OnInit {
  static BLANK_ALL_ERROR: string = "Please enter your username and password";
  static BLANK_USERNAME_ERROR: string = "Please enter your username";
  static BLANK_PASSWORD_ERROR: string = "Please enter your password";

  signIn: SignIn;
  payload: string;
  errorMessage: string;

  ngOnInit() {
    this.signIn = { username: '', password: '' };
    this.payload = '';
  }

  handleSubmit() {
    this.validate();

    if (!this.errorMessage) {
      this.payload = JSON.stringify(this.signIn);
    }
  }

  private validate() {
    if (!this.signIn.username && !this.signIn.password) {
      this.errorMessage = LoginFormComponent.BLANK_ALL_ERROR;
    } else if (!this.signIn.username) {
      this.errorMessage = LoginFormComponent.BLANK_USERNAME_ERROR;
    } else if (!this.signIn.password) {
      this.errorMessage = LoginFormComponent.BLANK_PASSWORD_ERROR;
    } else {
      this.errorMessage = undefined;
    }
  }
}