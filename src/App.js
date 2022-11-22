import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useReducer, useState } from 'react';
import './App.css';
import { drinksReducer } from './DrinksReducer';
import FilterSection from './FilterSection';
import PinnedSection from './PinnedSection';
import { readSavedDrinksFromLocalStorage, writeSavedDrinksToLocalStorage } from './StorageUtility';
import SuggestionSection from './SuggestionSection';

function App() {

  const [pinnedState, pinnedDispatch] = useReducer(drinksReducer, [], ()=>{return readSavedDrinksFromLocalStorage()});

  return (
    <div className="App">
      <div id='Header' className='section container'></div>

      <FilterSection></FilterSection>

      <SuggestionSection pinnedDispatch={pinnedDispatch} pinnedState={pinnedState}></SuggestionSection>

      <PinnedSection data={pinnedState}></PinnedSection>

    </div>
  );
}

export default App;
