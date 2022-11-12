export async function getNewSuggestions(setDrinks) {
    let numSuggestions = 3;
    let promises = [];


    for(let i = 0; i < numSuggestions; i++) {
        promises.push(getRandomDrink(setDrinks));
    }

    const drinks = await Promise.all(promises);

    setDrinks(drinks);

}

function getRandomDrink(setDrinks) {
    return fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(
            (result) => {
                let resultDrink = result.drinks[0];

                let ingredients = readIngredients(resultDrink);

                let drink = {
                    id: resultDrink.idDrink,
                    name: resultDrink.strDrink,
                    type: resultDrink.strCategory,
                    alcoholic: resultDrink.strAlcoholic,
                    instructions: resultDrink.strInstructions,
                    imageLink: resultDrink.strDrinkThumb,
                    ingredients: ingredients
                }
                
                return drink;

            }, (error) => {
                console.log(error)
            }
        )
}

//From the drinksDB api ingredients are stored in numbered variables and not as an array

function readIngredients(jsonDrink) {
    let ingredients = [];
    
    let count = 0;
    let flag = true;
    let ingredient;
    while(flag) {
        ingredient = jsonDrink[("strIngredient" + (++count))];
        //Loop through strIngredient with an incrementing number suffixed
        if (ingredient) {
            //Not null, continue
            ingredients.push({
                name: ingredient,
                amount: jsonDrink[("strMeasure" + count)]
            })
        } else {
            //Stop when a null value is encountered
            flag = false
        }
    }
    
    return ingredients;
}