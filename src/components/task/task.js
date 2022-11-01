
function Task({onTask, onButton, redniBroj}){

    return(
        <div>
        
            <p>{onTask.text}</p>
            <button onClick={()=>{onButton(redniBroj)}}> {onTask.isDone ? 'uradjeno' : 'nije uradjeno'}</button>
            
            
        </div>
    )
}
export default Task;

