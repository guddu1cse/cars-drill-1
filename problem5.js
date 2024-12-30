import {inventory} from "./inventory";
const countCarsOlderThan = (inventory, year) => {
    let count = 0; //count of cars older than year
    
    //iterating through the inventory
    for(let i=0; i<inventory.length; i++){
        if(inventory[i].car_year < year){
            count++;
        }   
    }

    //returning the count
    return count;
}

console.log(countCarsOlderThan(inventory, 2000));