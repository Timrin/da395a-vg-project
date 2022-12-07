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

export function readSetting(setting) {
    let settings = localStorage.getItem('drink-settings');

    if(settings === null){
        localStorage.setItem('drink-settings', JSON.stringify({}))
        return false;
    }else{
        settings = JSON.parse(settings);
        return settings[setting] === 'undefined' ? false : settings[setting];
    }
}

export function writeSetting(setting, value) {
    let settings = localStorage.getItem('drink-settings');

    if(settings === null){
        localStorage.setItem('drink-settings', JSON.stringify({setting: value}));
    } else {
        settings = JSON.parse(settings);
        settings[setting] = value;
        localStorage.setItem('drink-settings', JSON.stringify(settings));
    }
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