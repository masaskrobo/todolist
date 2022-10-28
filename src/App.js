import './App.css';
import Igra from './components/igra/igra';
import Rupa from './components/rupa/rupa.js';
import Razred from './components/ucenik/ucenik.js'


function App() {

  return (
    <div className="App">
      <Igra/>
      <Rupa/>
      <Razred/>
    </div>
  );
}


export default App;