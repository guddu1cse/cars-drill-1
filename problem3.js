const carListedInAplphabeticalOrder = (inventory) => {
    let carList = []; //carList which will be returned the car list in alphabetical order

    //inventory.sort((a,b)=>a.car_make.localeCompare(b.car_make));

    //sorting alphabetically
    for(let i=0; i<inventory.length; i++){
        for(let j=i+1; j<inventory.length; j++){
            //checking the naming and swapping
            if(inventory[i].car_make > inventory[j].car_make){
                let temp = inventory[i];
                inventory[i] = inventory[j];
                inventory[j] = temp;
            }
        }

        if(carList.size != 0){
            //avoiding duplicates car name in the list
            if(carList[carList.length-1] != inventory[i].car_make){
                carList.push(inventory[i].car_make); //pushing the car name
            }
        }
    }

    //returning name of all the cars
    return carList;
}

export default carListedInAplphabeticalOrder;