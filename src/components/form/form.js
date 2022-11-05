
import React, {useState} from 'react';
import '../form/form.css';
import {AiOutlinePlusCircle} from 'react-icons/ai'





function Form({onForm}){
const [input,setInput]=useState('')

function addText(event){
   setInput(event.target.value)

}
function clickButton(){
    onForm(input)
    setInput('')

}
    return(
        
        <div className='form_container'>
          <div className='input_container__box'>
            <input className='input' placeholder='Add a new Task' value={input} onChange={addText} type='text'></input>
            <p className='input_container__box__create'>Create Tasks</p>
          </div>
           <div>
            <button className='button' onClick={clickButton}>Create</button>
            <AiOutlinePlusCircle className='plus__icons'/>
            <p className='input_container__box__done'>Done Tasks</p>
            <button className='button_numb'>7</button>
            
            
           </div>
        </div>
    )
}
export default Form;