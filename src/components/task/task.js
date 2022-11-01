
function Task({onTask, onButton, redniBroj}){

    return(
        <div>
        
            <p>{onTask.text}</p>
            <button onClick={onButton}> {onTask.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            <button onClick= {redniBroj}>Dugme</button>
        </div>
    )
}
export default Task;

