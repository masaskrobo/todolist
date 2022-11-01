
function Task({onTask, onButton, redniBroj}){

    return(
        <div>
        
            <p>{onTask.text}</p>
            <button onClick={onButton}> {onTask.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            <p>{redniBroj}</p>
            
        </div>
    )
}
export default Task;

