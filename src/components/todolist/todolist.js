import Task from '../task/task.js'
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
    return(
        <div>
            <p>To Do List</p>
            {DoTasks.map(function(item){
                return  <Task onTask={item}/>
            })}
           
        </div>
    )
}
export default ToDoList;