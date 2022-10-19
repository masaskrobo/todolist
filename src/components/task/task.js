import './task.css'
import React, {useState} from 'react'
function Task({task, isRed}){
    const [title, setTitle] = useState(task.title);

    const clickHandler = () => {
       setTitle('Updated');
        console.log(title);
    }

    return(
        <div className= {'task ' + (isRed ? 'red': ' ') } >
            <p>{task.text}</p>
            <h2>{title}</h2>
            <button onClick={clickHandler}>{task.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            

        </div>
    )
}
export default Task;