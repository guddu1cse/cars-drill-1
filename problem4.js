import inventory from "./inventory.js";
const findYears = (inventory) => {
    let yearList = [];
    
    //iterating through the inventory
    for(let i=0; i<inventory.length; i++){
        yearList.push(inventory[i].car_year); //pushing the years
    }

    return yearList;
}

console.log(findYears(inventory));