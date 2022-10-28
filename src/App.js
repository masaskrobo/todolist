import './App.css';
import Igra from './components/igra/igra';
import Rupa from './components/rupa/rupa.js'
import Dvoriste from './components/dvoriste/dvoriste.js'

function App() {

  return (
    <div className="App">
      <Igra/>
      <Rupa/>
      <Dvoriste/>
    </div>
  );
}


export default App;