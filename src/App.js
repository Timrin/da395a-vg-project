import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { drinksReducer } from './DrinksReducer';
import FilterSection from './FilterSection';
import { PinnedDrinkContext } from './PinnedDrinkContext';
import PinnedSection from './PinnedSection';
import { readSavedDrinksFromLocalStorage, writeSavedDrinksToLocalStorage } from './StorageUtility';
import SuggestionSection from './SuggestionSection';

function App() {

  const [pinnedState, pinnedDispatch] = useReducer(drinksReducer, [], () => { return readSavedDrinksFromLocalStorage() });

  return (
    <div className="App">
      <div id='Header' className='section container'></div>
      <PinnedDrinkContext.Provider value={{state: pinnedState, dispatch: pinnedDispatch}}>
        <FilterSection></FilterSection>

        <SuggestionSection></SuggestionSection>

        <PinnedSection></PinnedSection>
      </PinnedDrinkContext.Provider>

    </div>
  );
}

export default App;
