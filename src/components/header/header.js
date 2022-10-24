import { useState } from 'react';
import './header.css'
function Header (){
    const[btn,setBtn] = useState('')
    function functionButton(){
       addNewButton(btn)
    }
    return (
        <header>
            <h1>To Do App</h1>
            <button onClick={functionButton}>Click!!</button>


        </header>
    )

}
export default Header;