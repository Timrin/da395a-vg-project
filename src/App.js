import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='Header' className='section'></div>

      <div id='Section-Filter' className='section'>
        <div className="sectionIcon">
          <span className="material-icons-outlined">filter_list</span>
        </div>
        <h1>Active Filters</h1>
      </div>

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
