import { Lighter } from './components/lighter/lighter';
import { Bulb } from './components/bulb/bulb';
import { Garland } from './components/garland/garland';


const firstLighter = new Lighter(document.querySelector('#lighter1'));

const bulb = new Bulb(document.querySelector('#bulb1'));
const bulb2 = new Bulb(document.querySelector('#bulb2'));
const garland = new Garland(document.querySelector('#garland1'),
    [
        new Bulb(document.querySelector('#bulb3')),
        new Bulb(document.querySelector('#bulb4'))
    ]
);

// window.lighter = [firstLighter]
// class LighterManager {
//     constructor(button, arrayOfLighters) {
//         this.button = button;
//         this.lighters = arrayOfLighters;
//
//         this.button.addEventListener('click', () => {
//             console.log(this.lighters[0].isEnabled);
//         })
//     }
// }
//
// const u = new LighterManager(document.querySelector('button'), [firstLighter]);

// function test() {
//   console.log('Test');
// }
//
// function greeting() {
//   console.log(this);
//   console.log('Hello my name is, ' + this.name);
// }
//
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
//   this.greet = greeting;
// }
//
// function Developer(name, age, lang) {
//   Person.call(this, name, age);
//   this.lang = lang;
//   this.develop = function () {
//     console.log('Written code at ' + this.lang);
//   }
// }
//
// function extend() {
// }

// function Car() {
//   this.fuel = 100;
// }
//
// Car.prototype.move = function () {
//   console.log('GO Not FAST!!!');
//   console.log('Fuel consumed', this.fuel -= 40);
// };
//
// Car.prototype.test = function () {
//   console.log('Fuel consumed', this.fuel -= 40);
// };

// class Car {
//   constructor() {
//     this.fuel = 100;
//   }
//
//   move() {
//     console.log('GO Not FAST!!!');
//     console.log('Fuel consumed', this.fuel -= 40);
//   }
//
//   test() {
//     console.log('Fuel consumed', this.fuel -= 40);
//   }
// }
//
// function SportCar() {
//   Car.call(this);
// }
//
// SportCar.prototype = Object.create(Car.prototype);
//
// SportCar.prototype.move = function () {
//   console.log('GO FAST!!!');
//   console.log('Fuel consumed', this.fuel -= 40);
// };
//
// /**
//  * @param car Car
//  * */
// function Driver(car) {
//   this.car = car;
//   this.drive = function () {
//     this.car.move();
//   }
// }
//
// const ferrari = new SportCar();
// const matiz = new Car();
// const someDrive = new Driver(matiz);
// debugger;
// someDrive.drive();
