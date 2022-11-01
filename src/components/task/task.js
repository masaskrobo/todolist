
function Task({onTask, onButton, redniBroj,onDelete}){

    return(
        <div>
        
            <p>{onTask.text}</p>
            <button onClick={()=>{onButton(redniBroj)}}> {onTask.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            <button onClick={onDelete}>Delete</button>
            
            
        </div>
    )
}
export default Task;

