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
   function ClickButton(tasks){
      const copyDoTasks = [...DoTasks]
      copyDoTasks[tasks].isDone = !
      copyDoTasks[tasks].isDone


   

        
   }
  



    return(
        <div>
            <p>To Do List</p>
            {DoTasks.map(function(item){
                return  <Task redniBroj={'11'} onButton={ClickButton} onTask={item}/>
            })}
           
        </div>
    )
}
export default ToDoList;