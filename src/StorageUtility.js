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

export function getPinnedSuggestions(setDrinksCallback, amount = 3) {
    let pinnedDrinks = readSavedDrinksFromLocalStorage();

    let randomDrinks = [];
    let randomDrinkIndices = [];
    while (randomDrinkIndices.length < amount) {
        console.log("randomDrinkIndices lenght: " + randomDrinkIndices.length)
        let randomIndex = Math.floor(Math.random() * pinnedDrinks.length);

        if (randomDrinkIndices.indexOf(randomIndex) === -1) {
            randomDrinkIndices.push(randomIndex);
            randomDrinks.push(pinnedDrinks[randomIndex])
        }
    }

    setDrinksCallback(randomDrinks);
}