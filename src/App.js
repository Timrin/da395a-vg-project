import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id='Header' className='section'></div>

      <div id='Section-Filter' className='section'>
        <h1>Active Filters</h1>
      </div>

      <div id='Section-Suggestion' className='section'>
        <h1>Suggestions</h1>
      </div>
      
      <div id='Section-Pinned' className='section'>
        <h1>Pinned</h1>
      </div>
    </div>
  );
}

export default App;
