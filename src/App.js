import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterSection from './FilterSection';
import PinnedSection from './PinnedSection';
import SectionHeader from './SectionHeader';
import SuggestionSection from './SuggestionSection';

function App() {
  return (
    <div className="App">
      <div id='Header' className='section container'></div>

      <FilterSection></FilterSection>

      <SuggestionSection></SuggestionSection>

      <PinnedSection></PinnedSection>

    </div>
  );
}

export default App;
