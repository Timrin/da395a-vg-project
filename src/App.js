import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';
import FilterSection from './FilterSection';
import PinnedSection from './PinnedSection';
import { readSavedDrinksFromLocalStorage, writeSavedDrinksToLocalStorage } from './StorageUtility';
import SuggestionSection from './SuggestionSection';

function App() {

  const [savedDrinks, setSavedDrinks] = useState([]);

  function saveDrink(drink) {
    //Check for duplicates
    let isSaved = savedDrinks.some((savedDrink)=>{return (savedDrink.id === drink.id)});

    //Don't add duplicates
    if(!isSaved) {
      let newSavedDrinks = [...savedDrinks, drink];
      
      setSavedDrinks(newSavedDrinks);
      writeSavedDrinksToLocalStorage(newSavedDrinks);
    }
  }

  useEffect(()=>{
    //Read saved drinks from local storage
    let savedDrinks = readSavedDrinksFromLocalStorage();

    setSavedDrinks(savedDrinks)
  }, [])

  return (
    <div className="App">
      <div id='Header' className='section container'></div>

      <FilterSection></FilterSection>

      <SuggestionSection saveDrink={saveDrink}></SuggestionSection>

      <PinnedSection data={savedDrinks}></PinnedSection>

    </div>
  );
}

export default App;
