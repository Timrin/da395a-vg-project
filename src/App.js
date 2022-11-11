import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterSection from './FilterSection';
import SectionHeader from './SectionHeader';
import SuggestionSection from './SuggestionSection';

function App() {
  return (
    <div className="App">
      <div id='Header' className='section container'></div>

      <FilterSection></FilterSection>

      <SuggestionSection></SuggestionSection>

      <div id='Section-Pinned' className='section'>
        <SectionHeader sectionTitle='Pinned' sectionIcon='push_pin'></SectionHeader>
      </div>

    </div>
  );
}

export default App;
