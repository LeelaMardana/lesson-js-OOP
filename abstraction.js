'use strict';

class Footballer {
  constructor(name, club) {
    this.name = name;
    this.club = club;
  }

  shoot() {}
  celebrate() {}
  pass() {}
}

class Forfard extends Footballer {
  constructor(name, club) {
    super(name, club);
  }

  shoot() {
    console.log('Очень сильный удар!');
  }

  celebrate() {
    console.log('Даа! Я забил гол');
  }

  pass() {
    console.log('Средненький пас');
  }
}
