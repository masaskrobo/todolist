import { useState } from 'react';
import './header.css'
function Header (onButtonTask){
    const[btn,setBtn] = useState('')
    function functionButton(){
       console.log('Klik')
    }
    return (
        <header>
            <h1>To Do App</h1>
            <button onClick={functionButton}>Click!!</button>


        </header>
    )

}
export default Header;