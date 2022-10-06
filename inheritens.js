class Plane {
  constructor(type) {
    this.type = type;
  }
}

class PassangerPlane extends Plane {
  constructor({ type, numberOfPassengers }) {
    super(type);
    this.numberOfPassengers = numberOfPassengers;
  }

  startFlight() {
    return `Самолет: '${this.type}',
с количетсвом пассажиров: '${this.numberOfPassengers}', начинает взллетать`;
  }
}

class MilitaryPlane extends Plane {
  constructor({ type, force }) {
    super(type);
    this.force = force;
  }

  startFlight() {
    return `Самолет: '${this.type}',
с силовой атакой: '${this.force}', начинает взллетать`;
  }
}

console.log(
  new PassangerPlane({ type: 'Пассажирский SUS80', numberOfPassengers: 150 })
);
console.log(new MilitaryPlane({ type: 'Военный BNP99', force: '900N' }));
