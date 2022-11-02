import Task from '../task/task.js'
import Form from '../form/form'
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
   function DeleteButton(deleteTasks){
    const copyNewTasks=[...listOfTasks] 
    copyNewTasks.splice(deleteTasks,1)

   setTasks(copyNewTasks)

   }
   function AddNewTask(input){
      console.log(input)
      const AddNewTask={
         text:input,
         isDone:false
      }
      setTasks([...listOfTasks,AddNewTask])
   }

    return(
        <div>
            <p>To Do List</p>
           <Form onForm={AddNewTask}/>
            {listOfTasks.map(function(item,index){
                return  <Task onDelete={DeleteButton} redniBroj={index} onButton={ClickButton} onTask={item}/>
            })}
           
        </div>
    )
}
export default ToDoList;