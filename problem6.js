import inventory from "./inventory.js";
const findCarByName = (car1 , car2 , inventory) => {
    let carList =[];

    for(let i=0; i<inventory.length; i++){
        if(inventory[i].car_make.toLowerCase() == car1.toLowerCase() 
            || inventory[i].car_make.toLowerCase() == car2.toLowerCase()){
            carList.push(inventory[i]);
        }
    }

    return carList;
}

console.log(findCarByName("Bmw", "Audi", inventory));