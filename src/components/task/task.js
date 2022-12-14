import '../task/task.css';
import {FiTrash2} from 'react-icons/fi';
import {AiFillCheckCircle} from 'react-icons/ai';
import {MdOutlineRadioButtonUnchecked} from 'react-icons/md';
function Task({onTask, onChange, ordinalNumb,onDelete}){

    return(
    
      <div className='task__container'>
             <div className='tasks__container__box'>
                 <button onClick={()=>{onChange(ordinalNumb)}}>  {onTask.isDone ? <AiFillCheckCircle className='buttonon__icon'/> : <MdOutlineRadioButtonUnchecked className='buttonoff__icon'/>}</button>
                 <p className='tasks__container_text'>{onTask.text}</p>
                 <button className='tasks__container_button' onClick={()=>{onDelete(ordinalNumb)}}><FiTrash2 className='trash__icons'/></button>
             </div>
      </div>
      
   )
}
export default Task;

