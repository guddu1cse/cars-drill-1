import inventory from "./inventory.js";

const findCarById = (id , inventory) => {
    //iterating through the inventory
    for(let i=0; i<inventory.length; i++){
        //checking the id
        if(inventory[i].id === id){
            return `Car ${id} is a ${inventory[i].car_year} ${inventory[i].car_make} ${inventory[i].car_model}`;
        }
    }

    //if not found car with the id
    return "No car found with Id: " + id;
}

console.log(findCarById(33, inventory));