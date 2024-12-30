import {inventory} from "./inventory";
const lastCar = (inventory) => {
    //returning the last car
    return `Last car is a ${inventory[inventory.length-1].car_make} ${inventory[inventory.length-1].car_model}`;
}

console.log(lastCar(inventory));