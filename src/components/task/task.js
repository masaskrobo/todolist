import './task.css'
function Task({task, isRed}){
    return(
        <div className= {'task ' + (isRed ? 'red': ' ') } >
            <p>{task.text}</p>
            <button>{task.isDone ? 'uradjeno' : 'nije uradjeno'}</button>

        </div>
    )
}
export default Task;