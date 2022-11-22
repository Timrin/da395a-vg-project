import { removeSavedDrink, writeSavedDrinksToLocalStorage } from "./StorageUtility";

export const ACTION_TYPES = { 
    ADD_DRINK: "ADD_DRINK", 
    REMOVE_DRINK: "REMOVE_DRINK"
};

export const drinksReducer = (state, action) => {
    console.log("Reducer");
    switch (action.type) {
        case ACTION_TYPES.ADD_DRINK:
            console.log("ADD_DRINK");
            let drinkToAdd = action.payload;
            //Check for duplicates
            let isSaved = state.some((drink) => { return (drink.id === drinkToAdd.id) });

            //Don't add duplicates
            if (!isSaved) {
                drinkToAdd["pinned"] = true;
                let newSavedDrinks = [...state, drinkToAdd];

                writeSavedDrinksToLocalStorage(newSavedDrinks); //Should this be done here?
                return newSavedDrinks;
            }
            return state
        case ACTION_TYPES.REMOVE_DRINK:
            let drinkToRemove = action.payload

            drinkToRemove["pinned"] = false;

            removeSavedDrink(drinkToRemove);
            return state.filter((drink)=>{return drink.id !== drinkToRemove.id});
        default:
            return state;
    }
};