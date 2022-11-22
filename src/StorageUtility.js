export function readSavedDrinksFromLocalStorage(){
    
    let array = localStorage.getItem('drinks');

    if(array === null){
        localStorage.setItem('drinks', JSON.stringify([]))
        return [];
    }else{
        return JSON.parse(array);
    }
}

export function writeSavedDrinksToLocalStorage(savedDrinks){

    let jsonSavedDrinks = JSON.stringify(savedDrinks)
    localStorage.setItem('drinks', jsonSavedDrinks);
}

export function removeSavedDrink(drinkToRemove) {

    let savedDrinks = readSavedDrinksFromLocalStorage();
    savedDrinks = savedDrinks.filter((drink)=>{return drink.id !== drinkToRemove.id});
    writeSavedDrinksToLocalStorage(savedDrinks);
}