import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css';
import FilterSection from './FilterSection';
import PinnedSection from './PinnedSection';
import SuggestionSection from './SuggestionSection';

function App() {

  const [savedDrinks, setSavedDrinks] = useState([]);

  function saveDrink(drink) {
    //Check for duplicates
    let isSaved = savedDrinks.some((savedDrink)=>{return (savedDrink.id === drink.id)});

    //Don't add duplicates
    if(!isSaved) {
      setSavedDrinks([...savedDrinks, drink])
    }
  }

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
