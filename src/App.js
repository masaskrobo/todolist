import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NameBox from './components/namebox/namebox';
import Task from './components/task/task';


function App() {
  const tasks = [{
    text: 'Zavrsii domaci',
    isDone: true,

  },
  {
    text: 'Usisaj sobu',
    isDone: true,

  },
  {
    text: 'Napravi rucak',
    isDone: false,

  }]
  return (
    <div className="App">
      <Header/>
        <div>
          {tasks.map((item)=>{
            return <Task task={item} isRed={false}/>

          })}
        </div>
      <Footer/>
    </div>
  );
}

export default App;
