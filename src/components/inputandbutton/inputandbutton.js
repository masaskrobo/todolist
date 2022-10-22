
import './inputandbutton.css'
import React, {useState} from 'react'

function InputAndButton({onSubmitTask}){
    const [newTask,setNewTask] = useState('')
    function addTask(e){
        setNewTask(e.target.value)
    }

    function clickButton(){
        onSubmitTask(newTask)
    }
    return (
        <div>
            <p>{newTask}</p>
            <input onChange={ addTask} type="text"></input>
            <button onClick={clickButton}>Dodaj</button>
        </div>
       
    )

}
export default InputAndButton;