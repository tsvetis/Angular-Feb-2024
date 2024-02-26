class Wallet {
  balance = 0;

  constructor(balance: number) {
    this.balance = balance;
  }
}

class Car {
  model: string;
  color: string;

  constructor(model: string, color: string) {
    this.model = model;
    this.color = color;
  }
}

// BAD WAY!
class Person {
  wallet: Wallet;
  car: Car;

  constructor(balance: number, model: string, color: string) {
    this.wallet = new Wallet(balance);
    this.car = new Car(model, color);
  }
}

const pesho = new Person(2100, 'VW', 'red');
const ivan = new Person(3200, 'bmw', 'black');
console.log('peshos balance: ', pesho.wallet.balance);
console.log('peshos car mode: ', pesho.car.model);
console.log('ivans balance: ', ivan.wallet.balance);
console.log('ivans car mode: ', ivan.car.model);

// BETTER WAY!
class PersonOptimized {
  wallet: Wallet;
  car: Car;

  constructor(wallet: Wallet, car: Car) {
    this.car = car;
    this.wallet = wallet;
  }
}

const mariasWallet = new Wallet(10000);
const mariasCar = new Car('Mercedes', 'blue');
const mariaPerson = new PersonOptimized(mariasWallet, mariasCar);
console.log(mariaPerson);

const petkoWallet = new Wallet(9999);
const petkoCar = new Car('Mercedes', 'zlaten');
const petkoPerson = new PersonOptimized(petkoWallet, petkoCar);
console.log(petkoPerson);
