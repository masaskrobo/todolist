
function Task({onTask, onButton}){

    return(
        <div>
            <p>Task</p>
            <p>Text:{onTask.text}</p>
            <button>{onTask.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            <button onClick={onButton}>Dugme</button>
        </div>
    )
}
export default Task;

