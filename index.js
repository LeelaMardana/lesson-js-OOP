// 'use strict';

// function and class

// function Animal(name) {
//   this.name = name;

//   this.getName = function () {
//     return this.name;
//   };
// }

class Animal {
  constructor(name) {
    this.name = name;
  }

  action() {
    return `The ${this.name} do some action`;
  }
}

const cat = new Animal('Кот');
const dog = new Animal('Собака');

console.log(cat);
console.log(dog);
