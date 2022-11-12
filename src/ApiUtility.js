export async function getNewSuggestions(setDrinks) {
    
    getRandomDrink(setDrinks)

}

function getRandomDrink(setDrinks) {
    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result)
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

                console.log(drink)

                setDrinks([drink, drink, drink])
                
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