
function Task({onTask}){
    return(
        <div>
            <p>Task</p>
            <p>Text:{onTask.text}</p>
            <button>False{onTask.isDone}</button>
        </div>
    )
}
export default Task;