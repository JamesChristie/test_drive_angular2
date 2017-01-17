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
});