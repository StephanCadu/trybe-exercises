"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const one_1 = __importDefault(require("./one"));
const car = new one_1.default('VolksWagen Gol', 'Prata', 4);
// getting passenger
car.turnOn();
car.speedUp();
console.log('600 meters');
car.speedDown();
car.turn('Left');
car.turn('Left');
car.speedUp();
console.log('200 meters');
car.speedDown();
car.turn('Right');
car.speedUp();
console.log('1.5 kilometers');
car.speedDown();
car.turn('Right');
console.log('400 meters');
car.speedDown();
car.stop();
car.turnOff();
car.honk();
// travel
car.turnOn();
car.speedUp();
console.log('300 meters');
car.speedDown();
car.turn('Right');
car.speedUp();
console.log('2.2 kilometers');
car.speedDown();
car.turn('Left');
car.speedUp();
console.log('400 meters');
car.speedDown();
car.turn('Right');
car.speedUp();
console.log('100 meters');
car.speedDown();
car.stop();
car.turnOff();
