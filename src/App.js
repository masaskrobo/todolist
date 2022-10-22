import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import NameBox from './components/namebox/namebox';
import Task from './components/task/task';
import React, {useState} from 'react';
import InputAndButton from './components/inputandbutton/inputandbutton';




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
  const[listOfTasks,setTasks]=useState(tasks)

  function changeTask(itemNumbers){
    const copyTasks = [...listOfTasks]
    copyTasks[itemNumbers].isDone = ! 
    copyTasks[itemNumbers].isDone

    setTasks(copyTasks)
  }


  return (
    <div className="App">
      <Header/>
        <div>
          {listOfTasks.map((item, index)=>{
            return <Task onChildClick={()=>{changeTask(index)}} task={item} isRed={false}/>

          })}
          
          
        </div>
       <InputAndButton/>
      <Footer/>
    </div>
  );
}

export default App;
