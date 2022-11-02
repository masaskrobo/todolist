import React, {useState} from 'react';
function Form({onForm}){
const [input,setInput]=useState('')

function addText(event){
   setInput(event.target.value)

}
function clickButton(){
    onForm(input)

}
    return(
        <div>
            <input onChange={addText} type='text'></input>
            <button onClick={clickButton}>Dodaj</button>
        </div>
    )
}
export default Form;