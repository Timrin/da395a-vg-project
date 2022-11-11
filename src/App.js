import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterSection from './FilterSection';
import SuggestionSection from './SuggestionSection';

function App() {
  return (
    <div className="App">
      <div id='Header' className='section container'></div>

      <FilterSection></FilterSection>

      <SuggestionSection></SuggestionSection>

      <div id='Section-Pinned' className='section'>
        <div className="sectionHeader container">
          <div className="sectionIcon">
            <span className="material-icons-outlined">push_pin</span>
          </div>
          <h1 className="sectionTitle">Pinned</h1>
        </div>
      </div>

    </div>
  );
}

export default App;
