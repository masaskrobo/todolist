
import './inputandbutton.css'
import React, {useState} from 'react'

function InputAndButton({onSubmitTask}){
    const [newTask,setNewTask] = useState('')
    function addTask(e){
        setNewTask(e.target.value)
    }

    function clickButton(){
        console.log('Click!')
    }
    return (
        <form>
            <p>{newTask}</p>
            <input onChange={ addTask} type="text"></input>
            <button onClick={clickButton}>Dodaj</button>
        </form>
       
    )

}
export default InputAndButton;