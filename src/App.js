import './App.css';
import Calendarcomp from './components/Calendarcomp'

const App = () => {
  return (
    <div className="App">
      <div className="components date">Date info</div>
      <div className="components calendar"><Calendarcomp /></div>
      <div className="components notes">Notes</div>
    </div>
  );
}

export default App;