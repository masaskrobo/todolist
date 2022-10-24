import { useState } from 'react';
import './header.css'
function Header ({onButtonTask}){
    
    function functionButton(){
       onButtonTask('Masa')
    }
    return (
        <header>
            <h1>To Do App</h1>
            <button onClick={functionButton}>Click!!</button>


        </header>
    )

}
export default Header;