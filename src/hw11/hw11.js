// // Задание 7
//
// function Animal(weight, speed) {
//     this.name = weight;
//     this.name = speed;
//     this.sound = sounding;
// }
//
// const animal = new Animal('Horse', 500);
// const animal2 = new Animal('Bird', 1);
//
//
// animal.sound();
// animal2.sound();
//
//
// function sounding() {
//     console.log(this);
//     console.log('Neigh! ' + this.name, ' makes a sound like that');
//     console.log('Quack! ' + this.name, ' makes a sound like that');
// }
//
//
// // Задание 7.1
//
// 'use strict';
//
// class Machine {
//     constructor(power) {
//         this.power = power;
//     }
//
//     function Machine() {
//         this.enabled = false;
//
//         this.enable = function () {
//             this.enabled = true;
//         };
//         this.disable = function () {
//             this.enabled = false;
//         }
//     }
// }
//
//
//
//
// // Задание 7.2
//
// 'use strict';
// class Machine {
//     constructor (power, food) {
//         this.power = power;
//         this.food = food;
//     }
//
//     function Machine() {
//         this._enabled = false;
//
//         this.enable = function() {
//             this._enabled = true;
//         };
//
//         this.disable = function() {
//             this._enabled = false;
//         }
//     }
//
//     function Fridge(power, food) {
//         Machine.apply(this, arguments);
//
//         this.addFood = function() {
//             if (!this._enabled) {
//                 return Error('Ошибка, холодильник выключен');
//             }
//             if (food.length + arguments.length > this.power) {
//                 return Error('Ошибка, слишком много еды');
//             }
//             for (var i = 0; i < arguments.length; i++) {
//                 food.push(arguments[i]);
//             }
//         };
//
//         this.getFood = function() {
//             return food.slice();
//         };
//     }
// }