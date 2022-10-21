import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NameBox from './components/namebox/namebox';
import Task from './components/task/task';
import React, {useState} from 'react';




function App() {
  
  const tasks = [{
    text: 'Zavrsi domaci',
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
  const[task,setTasks]=useState(tasks)

  function changeTask(){
    const copyTasks = [...task]
    copyTasks[1].isDone= false;
    setTasks(copyTasks)
  }


  return (
    <div className="App">
      <Header/>
        <div>
          {tasks.map((item)=>{
            return <Task onChildClick = {changeTask} task={item} isRed={false}/>

          })}
          
          
        </div>
      <Footer/>
    </div>
  );
}

export default App;
