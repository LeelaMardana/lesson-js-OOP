'use strict';

// Static следует писать чтобы создавать поля(это обьект внутри класса) и методы, которые принадлежат именно к классу, а не к каким то обьектам этого класса. В Static нельзя использовать this, иначе оно уже не может быть статическим

class Car {
  // Проверка на принадлежность
  static isCar(car) {
    return car instanceof Car ? 'Принадлежит' : 'Не принадлежит';
  }

  // Пораметры по умолчанию
  // такой обьект внутри класса называется полем
  static #initialParams = {
    name: 'Audi',
    speed: 150,
  };

  constructor(name, speed) {
    this.name = name || Car.#initialParams.name;
    this.speed = speed || Car.#initialParams.speed;
  }

  drive() {
    console.log(`Машина ${this.name} сейчас в пути`);
  }
}
const otherObject = {
  name: 'Tesla',
  speed: 230,
};

// Проверка на принадлежность которую мы написали в static
console.log(Car.isCar(otherObject));
