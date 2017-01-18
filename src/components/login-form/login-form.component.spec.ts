import { TestBed, ComponentFixture, fakeAsync, tick } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import {By} from "@angular/platform-browser";

describe('Component: LoginFormComponent', () => {
  let fixture: ComponentFixture<LoginFormComponent>;
  let component: LoginFormComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginFormComponent ],
      imports: [ FormsModule ]
    });

    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
  });

  it('should have a defined component', () => {
    expect(component).toBeDefined();
  });

  it('is initialized with a blank sign in model', () => {
    component.ngOnInit();
    expect(component.signIn).toEqual({ username: '', password: '' });
  })

  it('has a blank payload when submitted with empty fields', () => {
    component.ngOnInit();
    component.handleSubmit();

    expect(component.payload).toEqual('');
  });

  it('displays an error when submitted with empty fields', () => {
    component.ngOnInit();
    component.handleSubmit();

    expect(component.errorMessage).toEqual(LoginFormComponent.BLANK_ALL_ERROR);
  });

  it('has a blank payload when submitted with only a username', () => {
    component.ngOnInit();
    component.signIn.username = 'username@example.com';
    component.handleSubmit();

    expect(component.payload).toEqual('');
  });

  it('displays an error when submitted with only a username', () => {
    component.ngOnInit();
    component.signIn.username = 'username@example.com';
    component.handleSubmit();

    expect(component.errorMessage)
      .toEqual(LoginFormComponent.BLANK_PASSWORD_ERROR);
  });

  it('has a blank payload when submitted with only a password', () => {
    component.ngOnInit();
    component.signIn.password = 'hunter2';
    component.handleSubmit();

    expect(component.payload).toEqual('');
  });

  it('displays an error when submitted with only a password', () => {
    component.ngOnInit();
    component.signIn.password = 'hunter2';
    component.handleSubmit();

    expect(component.errorMessage)
      .toEqual(LoginFormComponent.BLANK_USERNAME_ERROR);
  });

  it('has a populated payload when submitted with all fields', () => {
    component.ngOnInit();
    component.signIn.username = 'username@example.com';
    component.signIn.password = 'hunter2';
    component.handleSubmit();

    expect(component.payload).toEqual(
      "{\"username\":\"username@example.com\",\"password\":\"hunter2\"}"
    );
  });

  it('displays no error message when submitted with all fields', () => {
    component.ngOnInit();
    component.signIn.username = 'username@example.com';
    component.signIn.password = 'hunter2';
    component.handleSubmit();

    expect(component.errorMessage).not.toBeDefined();
  });

  it('blanks the error message with a valid submission', () => {
    component.ngOnInit();
    component.signIn.username = 'username@example.com';
    component.handleSubmit();

    expect(component.errorMessage).toBeDefined();

    component.signIn.password = 'hunter2';
    component.handleSubmit();

    expect(component.errorMessage).not.toBeDefined();
  })
});