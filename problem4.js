const findYears = (inventory) => {
    let yearList = [];
    
    //iterating through the inventory
    for(let i=0; i<inventory.length; i++){
        yearList.push(inventory[i].car_year); //pushing the years
    }

    return yearList;
}

export default findYears;