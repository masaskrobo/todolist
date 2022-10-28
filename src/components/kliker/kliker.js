
function Kliker(onKliker){

    return(
        <div>
            <button onClick={() => {onKliker('obican bod')}}>Plavi</button>
            <button onClick={()=>{onKliker('obican bod')}}>Crveni</button>
            <button onClick={()=> {onKliker('pola boda')}}>Pola boda</button>
            <button onClick ={()=> {onKliker('extra bod')}}>Dzoker</button>
        </div>
    )

    
}


export default Kliker;
