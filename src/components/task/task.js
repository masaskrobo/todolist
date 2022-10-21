import './task.css'
import React, {useState} from 'react'

function Task({task, isRed, onChildClick}){
    return(
        <div className= {'task ' + (isRed ? 'red': ' ') } >
        <p>{task.text}</p>
          
            <button onClick={onChildClick}>{task.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            

        </div>
    )
}
export default Task;