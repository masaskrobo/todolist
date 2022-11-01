import Task from '../task/task.js'
import React, {useState} from 'react';
function ToDoList(){
    const DoTasks =[
    {  text:'Finish homework',
       isDone: false
    },
    {  text:'Clean the room',
       isDone: false
    },
    {  text:'Prepare lunch',
       isDone: true
    },
    {  text:'Go to the gym',
       isDone: false
    },
    {  text:'Wash the dishes',
       isDone: true
    },
]
   const [listOfTasks, setTasks] = useState(DoTasks)
   function ClickButton(taskNumber){
  const copyListOfTasks=[...listOfTasks]
  copyListOfTasks[taskNumber].isDone = ! 
  copyListOfTasks[taskNumber].isDone

  setTasks(copyListOfTasks);
    
   }
   function DeleteButton(){
      

   }

    return(
        <div>
            <p>To Do List</p>
            {listOfTasks.map(function(item,index){
                return  <Task onDelete={DeleteButton} redniBroj={index} onButton={ClickButton} onTask={item}/>
            })}
           
        </div>
    )
}
export default ToDoList;