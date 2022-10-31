import './App.css';
import Igra from './components/igra/igra';
import Rupa from './components/rupa/rupa.js';
import ToDoList from './components/todolist/todolist';
import Razred from './razred/razred';



function App() {

  return (
    <div className="App">
      <Igra/>
      <Rupa/>
      <Razred/>
      <ToDoList/>
    </div>
  );
}


export default App;