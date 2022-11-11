import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import FilterSection from './FilterSection';

function App() {
  return (
    <div className="App">
      <div id='Header' className='section container'></div>

      <FilterSection></FilterSection>

      <div id='Section-Suggestion' className='section'>
        <div className="sectionIcon">
          <span className="material-icons-outlined">view_carousel</span>
        </div>
        <h1>Suggestions</h1>
      </div>

      <div id='Section-Pinned' className='section'>
        <div className="sectionIcon">
          <span className="material-icons-outlined">push_pin</span>
        </div>
        <h1>Pinned</h1>
      </div>
    </div>
  );
}

export default App;
