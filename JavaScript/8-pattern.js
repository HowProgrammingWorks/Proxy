'use strict';

class Person {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    const { name = '', surname = '' } = this;
    return name + ' ' + surname;
  }
}

class PersonProxy {
  constructor(person) {
    this.person = person;
  }

  getFullName() {
    let fullName = this.person.getFullName();
    if (fullName.startsWith(' ') || fullName.endsWith(' ')) {
      fullName = fullName.trim();
    }
    return fullName;
  }
}

// Usage

const proxy = new PersonProxy(new Person('Marcus', 'Antonin'));
const fullName = proxy.getFullName();
console.dir({ fullName });
