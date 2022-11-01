
function Task({onTask, onButton}){

    return(
        <div>
        
            <p>{onTask.text}</p>
            <button onClick={onButton}> {onTask.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            
        </div>
    )
}
export default Task;

