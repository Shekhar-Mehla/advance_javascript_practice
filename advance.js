// oop concepts practice
// factory function
function aboutMe(name, add) {
  return {
    name,
    add,
    bio: function () {
      console.log(`hello my name is${this.name} and i live in ${this.add}`);
    },
  };
}
const shekhar = aboutMe("shekhar", "13 glenavon street velmot 33333");
console.log(shekhar.bio());
const kamal = aboutMe("kamal", "13 glenavon street velmot 3S");
console.log(kamal.bio());
// constructor function in javascript.
function Person(name, add) {
  this.name = name;
  this.add = add;
}
Person.prototype.bion = function () {
  console.log(`${this.name} and ${this.add}`);
};

const sm = new Person("saurin", "SAVIT");
console.log(sm.bion());

// class object

class ATM {
  constructor(account_number, balance) {
    this.account_number = account_number;
    this.balance = balance;
  }
  show_balance() {
    console.log(`your balance is $${this.balance}`);
  }
  withdraw(ww) {
    this.balance -= ww;
    console.log(
      `you have withdraw $${ww} and now your current balance is $${this.balance}`
    );
  }
  deposite(ww) {
    this.balance += ww;
    console.log(
      `you have deposited $${ww} and now your current balance is $${this.balance}`
    );
  }
}
const shekhar_MEHLA = new ATM(1234, 123456);
console.log(shekhar_MEHLA.show_balance());
console.log(shekhar_MEHLA.withdraw(100));
console.log(shekhar_MEHLA.deposite(105));
const kamal12 = new ATM(1, 100);
console.log(kamal12.show_balance());
console.log(kamal12.deposite(150));
console.log(kamal12);

// OOP CHALAANGE STATRT HERE
const Tesla = {
  model: "Tesla",
};
class Car {
  constructor(obj, engine = false) {
    this.engine = engine;
    this.model = obj.model;
    console.log(obj);
  }

  StartEngine() {
    if (this.engine === false) {
      this.engine = true;
      console.log(`your ${this.model} is now  ON you can start driving`);
    } else {
      console.log(`your ${this.model} is already running you cannot restart.`);
    }
  }
  StopEngine() {
    if (this.engine === true) {
      this.engine = false;
      console.log(`your ${this.model} is now  stop`);
    } else {
      console.log(`your ${this.model} is already stop.`);
    }
  }

  startdrive() {
    if (this.engine === false) {
      console.log(`your ${this.model} engine is off  start  engine to drive`);
    } else if (this.engine === true) {
      console.log(`${this.model} is moving`);
    }
  }
}
const mycar = new Car(Tesla);
console.log(mycar.startdrive());
console.log(mycar.StartEngine());
console.log(mycar.startdrive());
console.log(mycar.startdrive());
console.log(mycar.StartEngine());
console.log(mycar.StopEngine());
console.log(mycar.StopEngine());
