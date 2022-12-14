import React, {useState} from 'react';
import '../form/form.css';
import {AiOutlinePlusCircle} from 'react-icons/ai'

function Form({onForm}){
const [input,setInput]=useState('')

function addText(event){
   setInput(event.target.value)

}
function createdTasks(){
    onForm(input)
    setInput('')
}
    
return(
      <div className='form_container'>
            <input className='input' placeholder='Add a new Task' value={input} onChange={addText} type='text'></input>
               <div>
                  <button className='button' onClick={createdTasks}>Create<AiOutlinePlusCircle className='plus__icons'/></button>
               </div>
      </div>
)
}
export default Form;