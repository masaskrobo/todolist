
function Kliker({onKliker, boja}){

    return(
        <div>
            <p>{boja}</p>
            <button onClick={()=>{onKliker('obican bod')}}>Jedan bod</button>
            <button onClick={()=> {onKliker('pola boda')}}>Pola boda</button>
            <button onClick ={()=> {onKliker('extra bod')}}>Dzoker</button>
        </div>
    )

    
}


export default Kliker;
