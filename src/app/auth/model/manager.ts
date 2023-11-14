import {Person} from "./valueobjects/person";

export class Manager {
  id: number;
  person: Person;
  constructor(person: Person) {
    this.id = 0;
    this.person = person;
  }
}
