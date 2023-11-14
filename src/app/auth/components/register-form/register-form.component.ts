import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Manager} from "../../model/manager";
import {Person} from "../../model/valueobjects/person";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent {
  manager: Manager;
  managerForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    dni: new FormControl(''),
    age: new FormControl(0),
    phone: new FormControl(''),
  });
  person: Person = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    dni: '',
    age: 0,
    phone: '',
  };
  constructor() {
    this.manager = new Manager(this.person);
  }

  onSubmit() {
    this.person.firstName =
      this.managerForm.value.firstName ?? '';
    this.person.lastName =
      this.managerForm.value.lastName ?? '';
    this.person.email = this.managerForm.value.email ?? '';
    this.person.password =
      this.managerForm.value.password ?? '';
    this.person.age = this.managerForm.value.age ?? 0;

    this.manager = new Manager(this.person);

    console.log(this.manager);
  }
}
