
function Task({onTask}){
    return(
        <div>
            <p>Task</p>
            <p>{onTask.text}</p>
            <button>{onTask.isDone}</button>
        </div>
    )
}
export default Task;