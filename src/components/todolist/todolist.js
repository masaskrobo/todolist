import Task from '../task/task.js';
import Form from '../form/form';
import '../task/task.css';
import '../form/form.css';
import '../todolist/todolist.css';
import {AiOutlineRocket} from 'react-icons/ai'
import React, {useState} from 'react';

function ToDoList(){
 const [listOfTasks, setTasks] = useState([])


function ChangeTask(taskNumber){
  const copyListOfTasks=[...listOfTasks]
  copyListOfTasks[taskNumber].isDone = ! 
  copyListOfTasks[taskNumber].isDone

  setTasks(copyListOfTasks); }


function DeleteTask(deleteTasks){
    const copyNewTasks=[...listOfTasks] 
    copyNewTasks.splice(deleteTasks,1)

   setTasks(copyNewTasks) }


function AddNewTask(input){
      console.log(input)
      const AddNewTask={
         text:input,
         isDone:false }
   setTasks([...listOfTasks,AddNewTask]) }


   
const newArray = listOfTasks.filter(function(el){
      return el.isDone === true})
   
return(
      
   <div className='container'>
         <div className='title_background'>
              <h1 className='title'>
                <AiOutlineRocket className='rocket__icon'/>
                  <font color="#2595E7">to</font>
                  <font color="#6E31B8">do</font>
               </h1>
         </div>
          <div className='container_box'> 
               <Form onForm={AddNewTask}/>
               
                  <div className='container_box__tasks'>
                       <div className='container_box__tasks__numb'>
                          <p className='input_container__box__create'>Create Tasks</p>
                          <p className='tasks__numb'> {listOfTasks.length} </p>
                       </div>  
                       <div className='container_box__tasks__numb'>
                           <p className='input_container__box__done'>Done Tasks</p>
                           <p className='tasks__numb'>{newArray.length}</p>
                      </div> 
                  </div>

      
            {listOfTasks.map(function(item,index){
                return  <Task onDelete={DeleteTask} ordinalNumb={index} onChange={ChangeTask} onTask={item}/> })}
           
           </div>
   </div>
        
    )
}
export default ToDoList;