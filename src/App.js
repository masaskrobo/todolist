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
  function addNewTask (newTask){
    console.log(newTask)
  }
  function addnewButton(){
      console.log('klikni dugmme')
  }


  return (
    <div className="App">
      <Header  onButtonTask={addnewButton}/>
      <InputAndButton onSubmitTask={addNewTask}/> 
        <div>
          {listOfTasks.map((item, index)=>{
            return <Task onChildClick={()=>{changeTask(index)}} task={item} isRed={false}/>

          })}
          
          
        </div>
       
      <Footer/>
    </div>
  );
}

export default App;
