'use strict';

// Public
// Private #

class Developer {
  #salary;

  constructor(name, progLanguage) {
    this.name = name;
    this.progLanguage = progLanguage;
    this.#salary = 3000;
  }

  get devSalary() {
    return this.#salary;
  }

  set setSalary(salary) {
    this.#salary = salary;
  }

  startCoding() {
    console.log(this.#salary);
    console.log(this.#printProgrammingLanguage());
    console.log(`${this.name} начинает писать код`);
  }

  #printProgrammingLanguage() {
    return `Язык программирования: ${this.progLanguage}`;
  }
}

class Junior extends Developer {
  constructor(name, progLanguage) {
    super(name, progLanguage);
  }
}

const junior = new Junior('Антон', 'JavaScript');

const developer = new Developer('Максим', 'JavaScript');

// console.log(developer.devSalary);
// developer.setSalary = 5000;
// console.log(developer.devSalary);
